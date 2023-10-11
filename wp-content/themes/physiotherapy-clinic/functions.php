<?php
/**
 * Physiotherapy Clinic functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package physiotherapy-clinic
 * @since physiotherapy-clinic 1.0
 */

if ( ! function_exists( 'physiotherapy_clinic_support' ) ) :

	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * @since physiotherapy-clinic 1.0
	 *
	 * @return void
	 */
	function physiotherapy_clinic_support() {
		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		// Add support for block styles.
		add_theme_support( 'wp-block-styles' );

		add_theme_support( 'align-wide' );

		// Enqueue editor styles.
		add_editor_style( 'style.css' );

		add_theme_support( 'responsive-embeds' );
		
		// Add support for experimental link color control.
		add_theme_support( 'experimental-link-color' );
	}

endif;

add_action( 'after_setup_theme', 'physiotherapy_clinic_support' );

if ( ! function_exists( 'physiotherapy_clinic_styles' ) ) :

	/**
	 * Enqueue styles.
	 *
	 * @since physiotherapy-clinic 1.0
	 *
	 * @return void
	 */
	function physiotherapy_clinic_styles() {

		// Register theme stylesheet.
		wp_register_style(
			'physiotherapy-clinic-style',
			get_template_directory_uri() . '/style.css',
			array(),
			wp_get_theme()->get( 'Version' )
		);

		// Enqueue theme stylesheet.
		wp_enqueue_style( 'physiotherapy-clinic-style' );

	}

endif;

add_action( 'wp_enqueue_scripts', 'physiotherapy_clinic_styles' );

// Add block patterns
require get_template_directory() . '/inc/block-pattern.php';

// Add block Style
require get_template_directory() . '/inc/block-style.php';

// Get Started
require get_template_directory() . '/get-started/getstart.php';