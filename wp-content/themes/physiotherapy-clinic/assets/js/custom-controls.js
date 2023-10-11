(function(api) {

    api.sectionConstructor['physiotherapy-clinic-upsell'] = api.Section.extend({
        attachEvents: function() {},
        isContextuallyActive: function() {
            return true;
        }
    });

    const physiotherapy_clinic_section_lists = ['banner', 'service'];
    physiotherapy_clinic_section_lists.forEach(physiotherapy_clinic_homepage_scroll);

    function physiotherapy_clinic_homepage_scroll(item, index) {
        item = item.replace(/-/g, '_');
        wp.customize.section('physiotherapy_clinic_' + item + '_section', function(section) {
            section.expanded.bind(function(isExpanding) {
                wp.customize.previewer.send(item, { expanded: isExpanding });
            });
        });
    }
})(wp.customize);