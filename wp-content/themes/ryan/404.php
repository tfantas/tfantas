<?php
/**
 * The template for displaying 404 pages (Not Found).
 *
 * @package ThinkUpThemes
 */

get_header(); ?>

	<div class="entry-content title-404">
		<h2><i class="fa fa-ban"></i><?php _e( '404', 'ryan' ); ?></h2>
		<p><?php _e( 'Sorry, we could not find the page you are looking for.', 'ryan' ); ?><br/><?php _e( 'Please try using the search function.', 'ryan' ) ?></p>
		<?php get_search_form(); ?>
	</div>

<?php get_footer(); ?>