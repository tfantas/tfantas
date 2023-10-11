<?php
/**
 * Admin functions.
 *
 * @package Physiotherapy Clinic
 */

define('PHYSIOTHERAPY_CLINIC_SUPPORT',__('https://wordpress.org/support/theme/physiotherapy-clinic/','physiotherapy-clinic'));
define('PHYSIOTHERAPY_CLINIC_REVIEW',__('https://wordpress.org/support/theme/physiotherapy-clinic/reviews/#new-post','physiotherapy-clinic'));
define('PHYSIOTHERAPY_CLINIC_BUY_NOW',__('https://www.wpradiant.net/blocks/physiotherapy-clinic-wordpress-theme/','physiotherapy-clinic'));
define('PHYSIOTHERAPY_CLINIC_LIVE_DEMO',__('https://www.wpradiant.net/pattern/physiotherapy-clinic/','physiotherapy-clinic'));
define('PHYSIOTHERAPY_CLINIC_PRO_DOC',__('https://www.wpradiant.net/tutorial/physiotherapy-clinic-pro/','physiotherapy-clinic'));

/**
 * Register admin page.
 *
 * @since 1.0.0
 */
function physiotherapy_clinic_admin_menu_page() {

	$theme = wp_get_theme( get_template() );

	add_theme_page(
		$theme->display( 'Name' ),
		$theme->display( 'Name' ),
		'manage_options',
		'physiotherapy-clinic',
		'physiotherapy_clinic_do_admin_page'
	);

}
add_action( 'admin_menu', 'physiotherapy_clinic_admin_menu_page' );

function physiotherapy_clinic_admin_theme_style() {
	wp_enqueue_style('physiotherapy-clinic-custom-admin-style', esc_url(get_template_directory_uri()) . '/get-started/getstart.css');
}
add_action('admin_enqueue_scripts', 'physiotherapy_clinic_admin_theme_style');

/**
 * Render admin page.
 *
 * @since 1.0.0
 */
function physiotherapy_clinic_do_admin_page() {

	$theme = wp_get_theme( get_template() );
	?>
	<div class="physiotherapy-clinic-appearence wrap about-wrap">
		<div class="head-btn">
			<div><h1><?php echo $theme->display( 'Name' ); ?></h1></div>
			<div class="demo-btn">
				<span>
					<a class="button button-pro" href="<?php echo esc_url( PHYSIOTHERAPY_CLINIC_BUY_NOW ); ?>" target="_blank"><?php esc_html_e( 'Buy Now', 'physiotherapy-clinic' ); ?></a>
				</span>
				<span>
					<a class="button button-demo" href="<?php echo esc_url( PHYSIOTHERAPY_CLINIC_LIVE_DEMO ); ?>" target="_blank"><?php esc_html_e( 'Live Preview', 'physiotherapy-clinic' ); ?></a>
				</span>
				<span>
					<a class="button button-doc" href="<?php echo esc_url( PHYSIOTHERAPY_CLINIC_PRO_DOC ); ?>" target="_blank"><?php esc_html_e( 'Documentation', 'physiotherapy-clinic' ); ?></a>
				</span>
			</div>
		</div>
		
		<div class="two-col">

			<div class="about-text">
				<?php
					$description_raw = $theme->display( 'Description' );
					$main_description = explode( 'Official', $description_raw );
					?>
				<?php echo wp_kses_post( $main_description[0] ); ?>
			</div><!-- .col -->

			<div class="about-img">
				<a href="<?php echo esc_url( $theme->display( 'ThemeURI' ) ); ?>" target="_blank"><img src="<?php echo trailingslashit( get_template_directory_uri() ); ?>screenshot.png" alt="<?php echo esc_attr( $theme->display( 'Name' ) ); ?>" /></a>
			</div><!-- .col -->

		</div><!-- .two-col -->
		<div class="four-col">

			<div class="col">

				<h3><i class="dashicons dashicons-cart"></i><?php esc_html_e( 'Upgrade to Pro', 'physiotherapy-clinic' ); ?></h3>

				<p>
					<?php esc_html_e( 'To gain access to extra theme options and more interesting features, upgrade to pro version.', 'physiotherapy-clinic' ); ?>
				</p>

				<p>
					<a class="button green button-primary" href="<?php echo esc_url( PHYSIOTHERAPY_CLINIC_BUY_NOW ); ?>" target="_blank"><?php esc_html_e( 'Upgrade to Pro', 'physiotherapy-clinic' ); ?></a>
				</p>

			</div><!-- .col -->

			<div class="col">

				<h3><i class="dashicons dashicons-admin-customizer"></i><?php esc_html_e( 'Full Site Editing', 'physiotherapy-clinic' ); ?></h3>

				<p>
					<?php esc_html_e( 'We have used Full Site Editing which will help you preview your changes live and fast.', 'physiotherapy-clinic' ); ?>
				</p>

				<p>
					<a class="button button-primary" href="<?php echo esc_url( admin_url( 'site-editor.php' ) ); ?>" ><?php esc_html_e( 'Use Site Editor', 'physiotherapy-clinic' ); ?></a>
				</p>

			</div><!-- .col -->

			<div class="col">

				<h3><i class="dashicons dashicons-book-alt"></i><?php esc_html_e( 'Leave us a review', 'physiotherapy-clinic' ); ?></h3>
				<p>
					<?php esc_html_e( 'We would love to hear your feedback.', 'physiotherapy-clinic' ); ?>
				</p>

				<p>
					<a class="button button-primary" href="<?php echo esc_url( PHYSIOTHERAPY_CLINIC_REVIEW ); ?>" target="_blank"><?php esc_html_e( 'Review', 'physiotherapy-clinic' ); ?></a>
				</p>

			</div><!-- .col -->


			<div class="col">

				<h3><i class="dashicons dashicons-sos"></i><?php esc_html_e( 'Help &amp; Support', 'physiotherapy-clinic' ); ?></h3>

				<p>
					<?php esc_html_e( 'If you have any question/feedback regarding theme, please post in our official support forum.', 'physiotherapy-clinic' ); ?>
				</p>

				<p>
					<a class="button button-primary" href="<?php echo esc_url( PHYSIOTHERAPY_CLINIC_SUPPORT ); ?>" target="_blank"><?php esc_html_e( 'Get Support', 'physiotherapy-clinic' ); ?></a>
				</p>

			</div><!-- .col -->

		</div><!-- .four-col -->


	</div><!-- .wrap -->
	<?php

}