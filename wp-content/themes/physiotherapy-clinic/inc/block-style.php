<?php
/**
 * Block Styles
 *
 * @link https://developer.wordpress.org/reference/functions/register_block_style/
 *
 * @package WordPress
 * @subpackage physiotherapy-clinic
 * @since physiotherapy-clinic 1.0
 */

if ( function_exists( 'register_block_style' ) ) {
	/**
	 * Register block styles.
	 *
	 * @since physiotherapy-clinic 1.0
	 *
	 * @return void
	 */
	function physiotherapy_clinic_register_block_styles() {
		
		// Image: Borders.
		register_block_style(
			'core/image',
			array(
				'name'  => 'physiotherapy-clinic-border',
				'label' => esc_html__( 'Borders', 'physiotherapy-clinic' ),
			)
		);

		
	}
	add_action( 'init', 'physiotherapy_clinic_register_block_styles' );
}