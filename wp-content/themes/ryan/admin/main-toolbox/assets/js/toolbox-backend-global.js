jQuery(window).load(function() {

	// Select upgrade link
	var upgradeLink   = jQuery('#toplevel_page_thinkup-setup').find('a[href*="thinkupthemes.com"]');
	var upgradeParent = upgradeLink.closest('li');

	// Highlight upgrade link
	upgradeLink.attr('target', '_blank');
	upgradeParent.addClass('thinkup-sidebar-upgrade-pro');
});
