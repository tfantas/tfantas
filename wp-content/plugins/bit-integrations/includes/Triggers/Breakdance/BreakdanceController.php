<?php

namespace BitCode\FI\Triggers\Breakdance;

use BitCode\FI\Flow\Flow;
use Breakdance\Forms\Actions\Action;
use Breakdance\Forms\Actions\ActionProvider;
use BitCode\FI\Triggers\Breakdance\BreakdanceSubmitData;

final class BreakdanceController
{
    private $instance = null;
    public static $bAllForm = [];

    public static function info()
    {
        $plugin_path = self::pluginActive('get_name');
        return [
            'name' => 'Breakdance',
            'title' => 'Breakdance is the platform web creators choose to build professional WordPress websites, grow their skills, and build their business. Start for free today!',
            'slug' => $plugin_path,
            'pro' => $plugin_path,
            'type' => 'form',
            'is_active' => is_plugin_active($plugin_path),
            'activation_url' => wp_nonce_url(self_admin_url('plugins.php?action=activate&amp;plugin=' . $plugin_path . '&amp;plugin_status=all&amp;paged=1&amp;s'), 'activate-plugin_' . $plugin_path),
            'install_url' => wp_nonce_url(self_admin_url('update.php?action=install-plugin&plugin=' . $plugin_path), 'install-plugin_' . $plugin_path),
            'list' => [
                'action' => 'breakdance/get',
                'method' => 'get',
            ],
            'fields' => [
                'action' => 'breakdance/get/form',
                'method' => 'post',
                'data' => ['id']
            ],
        ];
    }

    public static function pluginActive($option = null)
    {
        if (is_plugin_active('breakdance/plugin.php')) {
            return $option === 'get_name' ? 'breakdance/plugin.php' : true;
        } else {
            return false;
        }
    }

    public static function addAction()
    {
        if (class_exists(__NAMESPACE__ . '\BreakdanceAction')) {
            \Breakdance\Forms\Actions\registerAction(new BreakdanceAction());
        }
    }

    /**
     * @return string
     */
    public static function name()
    {
        return 'Bit Integrations';
    }

    /**
     * @return string
     */
    public static function slug()
    {
        return 'bit-integrations-pro';
    }

    /**
     * @param FormData $form
     * @param FormSettings $settings
     * @param FormExtra $extra
     * @return ActionSuccess|ActionError|array<array-key, ActionSuccess|ActionError>
     */
    public function run($form, $settings, $extra)
    {
        $reOrganizeId = "{$extra['formId']}-{$extra['postId']}";
        $flows = Flow::exists('Breakdance', $reOrganizeId);
        if (!$flows) {
            return;
        }

        $data = $extra['fields'];

        Flow::execute('Breakdance', $reOrganizeId, $data, $flows);

        return ['type' => 'success'];
    }

    public function getAllForms()
    {
        if (!self::pluginActive()) {
            wp_send_json_error(__('Breakdance is not installed or activated', 'bit-integrations'));
        }

        $posts = self::getBreakdancePosts();
        $all_forms = [];
        if ($posts) {
            foreach ($posts as $post) {
                $postMeta   = self::getBreackdancePostMeta($post->ID);
                $forms      = self::getAllFormsFromPostMeta($postMeta, $post->ID);
                foreach ($forms as $form) {
                    $all_forms[] = (object)[
                        'id'        => "{$form['form_id']}",
                        'title'     => $form['form_name'],
                        'post_id'   => $post->ID,
                    ];
                }
            }
        }
        wp_send_json_success($all_forms);
    }

    public function getFormFields($data)
    {
        if (!self::pluginActive()) {
            wp_send_json_error(__('Breakdance is not installed or activated', 'bit-integrations'));
        }
        if (empty($data->id) && empty($data->postId)) {
            wp_send_json_error(__('Form doesn\'t exists', 'bit-integrations'));
        }

        $fields = self::fields($data);
        if (empty($fields)) {
            wp_send_json_error(__('Form doesn\'t exists any field', 'bit-integrations'));
        }

        $responseData['fields'] = $fields;
        $responseData['postId'] = $data->postId;
        wp_send_json_success($responseData);
    }

    public static function fields($data)
    {
        if (!isset($data->postId)) {
            return;
        }
        $selectedForm = explode('-', $data->id)[0];
        $postMeta = self::getBreackdancePostMeta($data->postId);
        $forms = self::getAllFormsFromPostMeta($postMeta, $data->postId);
        foreach ($forms as $form) {
            if ($selectedForm == explode('-', $form['form_id'])[0]) {
                foreach ($form['fields'] as $field) {
                    $fields[] = [
                        'name' => $field->advanced->id,
                        'type' => $field->type,
                        'label' => $field->label,
                    ];
                }
            }
        }
        return $fields;
    }

    public static function getAllFormsFromPostMeta($postMeta, $postId)
    {
        $forms = [];

        foreach ($postMeta as $widget) {
            $widget = is_string($widget) ? json_decode($widget) : $widget;
            $widget = (object) $widget;

            if (property_exists($widget, 'root')) {
                $rootData = $widget->root->children ?? $widget->root['children'];
                if (empty($rootData)) {
                    return;
                }

                foreach ($rootData as $everySection) {
                    $formDatas = is_array($everySection) ? $everySection['children'] ?? [] : $everySection->children ?? [];
                    if (empty($formDatas)) {
                        return;
                    }
                    foreach ($formDatas as $data) {
                        $form = self::extractAllForms($data, $postId);
                        if (!empty($form)) {
                            $forms = $form;
                        }
                    }
                }
            }
        }
        return $forms;
    }

    public static function extractAllForms($data, $postId)
    {
        $newForm = [];
        $allForm = [];
        foreach ($data as $keys => $element) {
            if ($keys === 'id') {
                $form_id = "{$element}-{$postId}";
            }
            if ($keys === 'data' && is_array($element)) {
                $element = (object) $element;
            }

            if (
                is_object($element)
                && property_exists($element, 'type')
                && $element->type === 'EssentialElements\\FormBuilder'
            ) {
                $newForm = $element->properties->content->form ?? $element->properties['content']['form'];
                $allForm[] = array_merge((array)$newForm, ['form_id' => $form_id]);
            }
            if ($keys == 'children') {
                if (is_array($element) && !empty($element)) {
                    foreach ($element as $secondLayer) {
                        $secondLayer = is_array($secondLayer) ? (object) $secondLayer : $secondLayer;
                        if (property_exists($secondLayer, 'children')) {
                            foreach ($secondLayer->children as $sKeys => $sValue) {
                                $allForm = self::extractAllForms($sValue, $postId);
                            }
                        }
                    }
                }
            }
        }
        return $allForm;
    }

    private static function getBreakdancePosts()
    {
        global $wpdb;
        return $wpdb->get_results(
            $wpdb->prepare(
                "SELECT ID, post_title FROM $wpdb->posts
                    LEFT JOIN $wpdb->postmeta ON ($wpdb->posts.ID = $wpdb->postmeta.post_id)
                        WHERE $wpdb->posts.post_status = 'publish' 
                            AND ($wpdb->posts.post_type = 'post' 
                                OR $wpdb->posts.post_type = 'page' 
                                OR $wpdb->posts.post_type = 'breakdance_footer') 
                            AND $wpdb->postmeta.meta_key = 'breakdance_data'"
            )
        );
    }

    private static function getBreackdancePostMeta(int $form_id)
    {
        global $wpdb;
        $postMeta = $wpdb->get_results(
            $wpdb->prepare(
                "SELECT meta_value FROM $wpdb->postmeta WHERE post_id = %d AND meta_key='breakdance_data' LIMIT 1",
                $form_id
            )
        );
        return json_decode($postMeta[0]->meta_value);
    }
}
