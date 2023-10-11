<?php
/**
 * Primary Sidebar
 * 
 * slug: primary-sidebar
 * title: Primary Sidebar
 * categories: physiotherapy-clinic
 */

return array(
   'title'      =>__( 'Sidebar Section', 'physiotherapy-clinic' ),
   'categories' => array( 'physiotherapy-clinic' ),
   'content'    =>'<!-- wp:group {"style":{"spacing":{"margin":{"bottom":"30px"},"blockGap":"20px"}},"className":"has-no-hover-box-shadow"} -->
<div class="wp-block-group has-no-hover-box-shadow" style="margin-bottom:30px"><!-- wp:heading {"level":3,"style":{"typography":{"fontStyle":"normal","fontWeight":"500"}},"fontSize":"upper-heading"} -->
<h3 class="has-upper-heading-font-size" style="font-style:normal;font-weight:500">'.esc_html__('Search','physiotherapy-clinic').'</h3>
<!-- /wp:heading -->

<!-- wp:search {"label":"Search","showLabel":false,"buttonText":"Search","buttonUseIcon":true,"backgroundColor":"accent","fontSize":"tiny"} /--></div>
<!-- /wp:group -->

<!-- wp:group {"style":{"spacing":{"margin":{"bottom":"30px"},"blockGap":"20px"}},"className":"has-no-hover-box-shadow"} -->
<div class="wp-block-group has-no-hover-box-shadow" style="margin-bottom:30px"><!-- wp:heading {"level":3,"style":{"typography":{"fontStyle":"normal","fontWeight":"500"}},"fontSize":"upper-heading"} -->
<h3 class="has-upper-heading-font-size" style="font-style:normal;font-weight:500">'.esc_html__('Latest Post','physiotherapy-clinic').'</h3>
<!-- /wp:heading -->

<!-- wp:latest-posts /--></div>
<!-- /wp:group -->

<!-- wp:group {"style":{"spacing":{"margin":{"bottom":"30px"},"blockGap":"20px"}},"className":"has-no-hover-box-shadow"} -->
<div class="wp-block-group has-no-hover-box-shadow" style="margin-bottom:30px"><!-- wp:heading {"level":3,"style":{"typography":{"fontStyle":"normal","fontWeight":"500"}},"fontSize":"upper-heading"} -->
<h3 class="has-upper-heading-font-size" style="font-style:normal;font-weight:500">'.esc_html__('Category','physiotherapy-clinic').'</h3>
<!-- /wp:heading -->

<!-- wp:categories /--></div>
<!-- /wp:group -->

<!-- wp:group {"style":{"spacing":{"margin":{"bottom":"30px"},"blockGap":"20px"}},"className":"has-no-hover-box-shadow"} -->
<div class="wp-block-group has-no-hover-box-shadow" style="margin-bottom:30px"><!-- wp:heading {"level":3,"style":{"typography":{"fontStyle":"normal","fontWeight":"500"}},"fontSize":"upper-heading"} -->
<h3 class="has-upper-heading-font-size" style="font-style:normal;font-weight:500">'.esc_html__('social','physiotherapy-clinic').'</h3>
<!-- /wp:heading -->

<!-- wp:social-links {"iconBackgroundColor":{},"style":{"spacing":{"blockGap":{"top":"20px","left":"20px"}}},"className":"is-style-default","layout":{"type":"flex","justifyContent":"left"}} -->
<ul class="wp-block-social-links is-style-default"><!-- wp:social-link {"url":"3","service":"twitter"} /-->

<!-- wp:social-link {"url":"#","service":"youtube"} /-->

<!-- wp:social-link {"url":"#","service":"facebook"} /-->

<!-- wp:social-link {"url":"#","service":"linkedin"} /--></ul>
<!-- /wp:social-links --></div>
<!-- /wp:group -->'
);