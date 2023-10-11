<?php
/**
 * The template for displaying content where a specific template is not available.
 *
 * @package ThinkUpThemes
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

	<header class="entry-header">

		<h2 class="search-title">
		<a href="<?php the_permalink(); ?>" title="<?php printf( esc_attr__( 'Permalink to %s', 'ryan' ), the_title_attribute( 'echo=0' ) ); ?>"><?php the_title(); ?></a>
		</h2>

	</header><!-- .entry-header -->

	<?php if ( is_search() ) : ?>

		<div class="entry-content">
			<?php the_excerpt(); ?>
		</div><!-- .entry-content -->

	<?php else : ?>

		<div class="entry-content">
			<?php the_content(); ?>
		</div><!-- .entry-content -->

	<?php endif; ?>

</article><!-- #post-<?php the_ID(); ?> -->