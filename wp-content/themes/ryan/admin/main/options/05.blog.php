<?php
/**
 * Blog functions.
 *
 * @package ThinkUpThemes
 */

 /* ----------------------------------------------------------------------------------
	BLOG STYLE
---------------------------------------------------------------------------------- */

function thinkup_input_blogclass($classes){

// Get theme options values.
$thinkup_blog_style        = thinkup_var ( 'thinkup_blog_style' );
$thinkup_blog_style1layout = thinkup_var ( 'thinkup_blog_style1layout' );

	if ( thinkup_check_isblog() ) {
		if ( empty( $thinkup_blog_style ) or $thinkup_blog_style == 'option1' ) {
			if ( $thinkup_blog_style1layout !== 'option2' ) {
				$classes[] = 'blog-style1 blog-style1-layout1';
			} else {
				$classes[] = 'blog-style1 blog-style1-layout2';
			}
		} else {
			$classes[] = 'blog-style2';
		}
	}
	return $classes;
}
add_action( 'body_class', 'thinkup_input_blogclass');

// Add blog class to search results page
function thinkup_input_searchclass($classes){

	if ( is_search() ) {
		$classes[] = 'blog-style1';
	}
	return $classes;
}
add_action( 'body_class', 'thinkup_input_searchclass');

/* ----------------------------------------------------------------------------------
	BLOG STYLE
---------------------------------------------------------------------------------- */

function thinkup_input_stylelayout() {

// Get theme options values.
$thinkup_blog_style        = thinkup_var ( 'thinkup_blog_style' );
$thinkup_blog_style2layout = thinkup_var ( 'thinkup_blog_style2layout' );

		if ( $thinkup_blog_style !== 'option2' ) {
			echo ' column-1';
		} else if ( $thinkup_blog_style == 'option2' ) {			
			if ( empty($thinkup_blog_style2layout) or $thinkup_blog_style2layout == 'option1' ) {
				echo ' column-1';
			} else if ( $thinkup_blog_style2layout == 'option2' ) {
				echo ' column-2';
			} else if ( $thinkup_blog_style2layout == 'option3' ) {
				echo ' column-3';
			} else if ( $thinkup_blog_style2layout == 'option4' ) {
				echo ' column-4';
			}
		}
}


/* ----------------------------------------------------------------------------------
	BLOG STYLE - CLASSES FOR STYLE 1
---------------------------------------------------------------------------------- */

function thinkup_input_stylelayout_class1() {
global $post;

// Get theme options values.
$thinkup_blog_style        = thinkup_var ( 'thinkup_blog_style' );
$thinkup_blog_style1layout = thinkup_var ( 'thinkup_blog_style1layout' );
$thinkup_blog_postswitch   = thinkup_var ( 'thinkup_blog_postswitch' );

	if ( has_post_thumbnail( $post->ID ) and $thinkup_blog_postswitch !== 'option2' ) {
		if ( $thinkup_blog_style !== 'option2' and $thinkup_blog_style1layout !== 'option2' ) {
			echo ' one_third';
		}
	}
}

function thinkup_input_stylelayout_class2() {
global $post;

// Get theme options values.
$thinkup_blog_style        = thinkup_var ( 'thinkup_blog_style' );
$thinkup_blog_style1layout = thinkup_var ( 'thinkup_blog_style1layout' );
$thinkup_blog_postswitch   = thinkup_var ( 'thinkup_blog_postswitch' );

	if ( has_post_thumbnail( $post->ID ) and $thinkup_blog_postswitch !== 'option2' ) {
		if ( $thinkup_blog_style !== 'option2' and $thinkup_blog_style1layout !== 'option2' ) {
			echo ' two_third last';
		}
	}
}


/* ----------------------------------------------------------------------------------
	HIDE POST TITLE
---------------------------------------------------------------------------------- */

function thinkup_input_blogtitle() {

	echo	'<h2 class="blog-title">',
			'<a href="' . esc_url( get_permalink() ) . '" title="' . esc_attr( sprintf( __( 'Permalink to %s', 'ryan' ), the_title_attribute( 'echo=0' ) ) ) . '">' . get_the_title() . '</a>',
			'</h2>';
}


/* ----------------------------------------------------------------------------------
	BLOG CONTENT
---------------------------------------------------------------------------------- */

// Input post thumbnail / featured media
function thinkup_input_blogimage() {
global $post;

// Get theme options values.
$thinkup_blog_style        = thinkup_var ( 'thinkup_blog_style' );
$thinkup_blog_style1layout = thinkup_var ( 'thinkup_blog_style1layout' );
$thinkup_blog_style2layout = thinkup_var ( 'thinkup_blog_style2layout' );
$thinkup_blog_lightbox     = thinkup_var ( 'thinkup_blog_hovercheck', 'option1' );
$thinkup_blog_link         = thinkup_var ( 'thinkup_blog_hovercheck', 'option2' );

	$size    = NULL;
	$link    = NULL;
	$media   = NULL;
	$output  = NULL;

	$blog_lightbox = NULL;
	$blog_link     = NULL;
	$blog_class    = NULL;
	$blog_overlay  = NULL;

	// Set image size for blog thumbnail
	if ( $thinkup_blog_style !== 'option2' ) {
		if ( empty($thinkup_blog_style1layout) or $thinkup_blog_style1layout == 'option1' ) {
			$size = 'column2-2/3';
		} else {
			$size = 'column1-1/4';
		}
	} else if ( $thinkup_blog_style == 'option2' ) {			
		if ( empty($thinkup_blog_style2layout) or $thinkup_blog_style2layout == 'option1' ) {
			$size = 'column1-1/3';
		} else if ( $thinkup_blog_style2layout == 'option2' ) {
			$size = 'column2-1/2';
		} else if ( $thinkup_blog_style2layout == 'option3' ) {
			$size = 'column3-2/3';
		} else if ( $thinkup_blog_style2layout == 'option4' ) {
			$size = 'column4-2/3';
		}
	}

	$featured_id = get_post_thumbnail_id( $post->ID );
	$featured_img = wp_get_attachment_image_src($featured_id,'full', true);

	// Determine featured media to input
	$link  = $featured_img[0];
	$media = get_the_post_thumbnail( $post->ID, $size );

	// Determine which links to show on hover
	if ( $thinkup_blog_lightbox =='1' ) {
		$blog_lightbox = '<a class="hover-zoom prettyPhoto" href="' . esc_url( $link ) . '"></a>';
	}
	if ( $thinkup_blog_link =='1' ) {
		$blog_link = '<a class="hover-link" href="' . esc_url( get_permalink() ) . '"></a>';
	}

	// Determine which if single link animation should be shown
	if ( ( $thinkup_blog_lightbox =='1' and $thinkup_blog_link !== '1' )
		or ( $thinkup_blog_lightbox !=='1' and $thinkup_blog_link == '1' ) ) {
		$blog_class = ' style2';
	}

	if ( $thinkup_blog_lightbox =='1' or $thinkup_blog_link =='1' ) {
		$blog_overlay .= '<div class="image-overlay' . esc_attr( $blog_class ) . '">';
		$blog_overlay .= '<div class="image-overlay-inner"><div class="hover-icons">';
		$blog_overlay .= $blog_lightbox;
		$blog_overlay .= $blog_link;
		$blog_overlay .= '</div></div>';
		$blog_overlay .= '</div>';
	}

	// Output media on blog page
	if ( ! empty( $featured_id ) ) {
		$output .= '<div class="blog-thumb">';
		$output .= '<a href="' . esc_url( get_permalink($post->ID) ) . '">' . $media . '</a>';
		$output .= $blog_overlay;
		$output .= '</div>';
	}

	return $output;
}

// Input post excerpt / content to blog page
function thinkup_input_blogtext() {
global $post;

// Get theme options values.
$thinkup_blog_postswitch = thinkup_var ( 'thinkup_blog_postswitch' );

	// Output full content - EDD plugin compatibility
	if( function_exists( 'EDD' ) and is_post_type_archive( 'download' ) ) {
		the_content();
		return;
	}

	// Output post content
	if ( is_search() ) {
		the_excerpt();
	} else if ( ! is_search() ) {
		if ( ( empty( $thinkup_blog_postswitch ) or $thinkup_blog_postswitch == 'option1' ) ) {
			if( ! is_numeric( strpos( $post->post_content, '<!--more-->' ) ) ) {
				the_excerpt();
			} else {
				the_content();
			}
		} else if ( $thinkup_blog_postswitch == 'option2' ) {
			the_content();
		}
	}
}


/* ----------------------------------------------------------------------------------
	BLOG POST EXCERPT
---------------------------------------------------------------------------------- */

function thinkup_input_blogpostexcerpt() {

	// return default value if not triggered above
	return 55;
}
add_filter( 'excerpt_length', 'thinkup_input_blogpostexcerpt', 999 );


/* ----------------------------------------------------------------------------------
	BLOG META CONTENT & POST META CONTENT
---------------------------------------------------------------------------------- */

// Input sticky post
function thinkup_input_sticky() {
	printf( '<span class="sticky"><i class="fa fa-thumb-tack"></i><a href="%1$s" title="%2$s">' . __( 'Sticky', 'ryan' ) . '</a></span>',
		esc_url( get_permalink() ),
		esc_attr( get_the_title() )
	);
}

// Input blog date
function thinkup_input_blogdate() {
	printf( __( '<span class="date"><span class="meta-title">' . __( 'Date:', 'ryan' ) . '</span><a href="%1$s" title="%2$s"><time datetime="%3$s">%4$s</time></a></span>', 'ryan' ),
		esc_url( get_permalink() ),
		esc_attr( get_the_title() ),
		esc_attr( get_the_date( 'c' ) ),
		esc_html( get_the_date() )
	);
}

// Input blog comments
function thinkup_input_blogcomment() {

	if ( '0' != get_comments_number() ) {
		echo	'<span class="comment"><span class="meta-title">' . __( 'Comments:', 'ryan' ) . '</span>';
			if ( ! post_password_required() && ( comments_open() || '0' != get_comments_number() ) ) {;
				comments_popup_link( __( '<span class="comment-count">0</span> <span class="comment-text">Comments</span>', 'ryan' ), __( '<span class="comment-count">1</span> <span class="comment-text">Comment</span>', 'ryan' ), __( '<span class="comment-count">%</span> <span class="comment-text">Comments</span>', 'ryan' ) );
			};
		echo	'</span>';
	}
}

// Input blog categories
function thinkup_input_blogcategory() {
$categories_list = get_the_category_list( __( ', ', 'ryan' ) );

	if ( $categories_list && thinkup_input_categorizedblog() ) {
		echo	'<span class="category"><span class="meta-title">' . __( 'Category:', 'ryan' ) . '</span>';
		printf( __( '%1$s', 'ryan' ), $categories_list );
		echo	'</span>';
	};
}

// Input blog tags
function thinkup_input_blogtag() {
$tags_list = get_the_tag_list( '', __( ', ', 'ryan' ) );

	if ( $tags_list ) {
		echo	'<span class="tags"><span class="meta-title">' . __( 'Tag:', 'ryan' ) . '</span>';
		printf( __( '%1$s', 'ryan' ), $tags_list );
		echo	'</span>';
	};
}

// Input blog author
function thinkup_input_blogauthor() {
	printf( __( '<span class="author"><span class="meta-title">' . __( 'Posted By:', 'ryan' ) . '</span><a href="%1$s" title="%2$s" rel="author">%3$s</a></span>', 'ryan' ),
		esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ),
		esc_attr( sprintf( __( 'View all posts by %s', 'ryan' ), get_the_author() ) ),
		get_the_author()
	);
}


//----------------------------------------------------------------------------------
//	CUSTOM READ MORE BUTTON.
//----------------------------------------------------------------------------------

function thinkup_input_readmore() {
global $post;

// Set variables to avoid php non-object notice error
$class_button = NULL;

	// Specify button class for blog style
	$class_button = 'themebutton3';

	return '...<p class="more-link"><a href="' . esc_url( get_permalink($post->ID) ) . '" class="' . esc_attr( $class_button ) . '">' . __( 'Read More', 'ryan') . '</a></p>';
}
add_filter( 'excerpt_more', 'thinkup_input_readmore' );
add_filter( 'the_content_more_link', 'thinkup_input_readmore' );


/* ----------------------------------------------------------------------------------
	INPUT BLOG META CONTENT
---------------------------------------------------------------------------------- */

// Add format-media class to post article for featured image, gallery and video
function thinkup_input_blogmediaclass($classes) {

	if ( thinkup_check_isblog() ) {
		if( has_post_thumbnail() ) {
			$classes[] = 'format-media';
		} else {
			$classes[] = 'format-nomedia';
		}
	}
	return $classes;
}
add_action( 'post_class', 'thinkup_input_blogmediaclass');

// Blog meta content - Blog style 1
function thinkup_input_blogmeta() {

	echo '<div class="entry-meta">';
		if ( is_sticky() && is_home() && ! is_paged() ) { thinkup_input_sticky(); }

		thinkup_input_blogdate();
		thinkup_input_blogauthor();
		thinkup_input_blogcomment();
		thinkup_input_blogcategory();
		thinkup_input_blogtag();
	echo '</div>';
}


/* ----------------------------------------------------------------------------------
	INPUT POST META CONTENT
---------------------------------------------------------------------------------- */

function thinkup_input_postmedia() {
global $post;

	// Set output variable to avoid php errors
	$output = NULL;

	if ( get_post_format() == 'image' ) {

		$output .= '<div class="post-thumb">' . get_the_post_thumbnail( $post->ID, 'thinkup-column1-1/4' ) . '</div>';

	}

	// Output featured items if set
	if ( ! empty( $output ) ) {
		echo $output;
	}
}

// Add format-media class to post article for featured image, gallery and video
function thinkup_input_postmediaclass($classes) {

	if ( is_singular( 'post' ) ) {
		if ( get_post_format() == 'image' ) {
			if( has_post_thumbnail() ) {
				$classes[] = 'format-media';
			}
		} else {
			$classes[] = 'format-nomedia';
		}
	}
	return $classes;
}
add_action( 'post_class', 'thinkup_input_postmediaclass');

// Input meta data for single post
function thinkup_input_postmeta() {

	echo '<header class="entry-header">';

	echo '<div class="entry-meta">';
		thinkup_input_blogdate();
		thinkup_input_blogauthor();
		thinkup_input_blogcomment();
		thinkup_input_blogcategory();
		thinkup_input_blogtag();
	echo '</div>';

	echo '<div class="clearboth"></div></header><!-- .entry-header -->';
}


/* ----------------------------------------------------------------------------------
	SHOW AUTHOR BIO
---------------------------------------------------------------------------------- */

// HTML for Author Bio
function thinkup_input_postauthorbiocode() {

	echo	'<div id="author-bio">',
			'<div id="author-image">',
			get_avatar( get_the_author_meta( 'email' ), '160' ),
			'</div>',
			'<div id="author-content">',
			'<div id="author-title">',
			'<p><a href="' . esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ) . '"/>' . get_the_author() . '</a></p>',
			'</div>';

			if ( get_the_author_meta( 'description' ) !== '' ) {
			echo '<div id="author-text">',
				 wpautop( esc_html( get_the_author_meta( 'description' ) ) ),
				 '</div>';
			}

	echo	'</div></div>';
}

// Output Author Bio
function thinkup_input_postauthorbio() {

// Get theme options values.
$thinkup_post_authorbio = thinkup_var ( 'thinkup_post_authorbio' );

	if ( $thinkup_post_authorbio == '1' ) {
		thinkup_input_postauthorbiocode();
	}
}


/* ----------------------------------------------------------------------------------
	TEMPLATE FOR COMMENTS AND PINGBACKS (PREVIOUSLY IN TEMPLATE-TAGS).
---------------------------------------------------------------------------------- */

/* Display comments  - Style 1 */
function thinkup_input_allowcomments() {

	if ( comments_open() || '0' != get_comments_number() ) {
		comments_template( '/comments.php', true );
	}
}


/* ----------------------------------------------------------------------------------
	TEMPLATE FOR COMMENTS AND PINGBACKS (PREVIOUSLY IN TEMPLATE-TAGS).
---------------------------------------------------------------------------------- */

function thinkup_input_commenttemplate( $comment, $args, $depth ) {

	$GLOBALS['comment'] = $comment;
	switch ( $comment->comment_type ) :
		case 'pingback' :
		case 'trackback' :
	?>
	<li class="post pingback">
		<p><?php _e( 'Pingback:', 'ryan'); ?> <?php comment_author_link(); ?><?php edit_comment_link( __( 'Edit', 'ryan' ), ' ' ); ?></p>
	<?php
			break;
		default :
	?>
	<li <?php comment_class(); ?> id="li-comment-<?php comment_ID(); ?>">
		<article id="comment-<?php comment_ID(); ?>" class="comment">
					<?php echo get_avatar( $comment, 100 ); ?>
			<header>

				<div class="comment-author">
					<h4><?php printf( '%s', sprintf( '%s', get_comment_author_link() ) ); ?></h4>
				</div>
				<?php if ( $comment->comment_approved == '0' ) : ?>
					<em><?php _e( 'Your comment is awaiting moderation.', 'ryan'); ?></em>
					<br />
				<?php endif; ?>

				<div class="comment-meta">
					<a href="<?php echo esc_url( get_comment_link( $comment->comment_ID ) ); ?>"><time datetime="<?php esc_attr( comment_time( 'c' ) ); ?>">
					<?php
						/* translators: 1: date, 2: time */
						printf( '%1$s', get_comment_date() ); ?>
					</time></a>
					<?php edit_comment_link( __( 'Edit', 'ryan' ), ' ' );
					?>
				</div>

				<span class="reply">
					<?php comment_reply_link( array_merge( $args, array( 'depth' => $depth, 'max_depth' => $args['max_depth'] ) ) ); ?>
				</span>

			</header><div class="clearboth"></div>

			<footer>

				<div class="comment-content"><?php comment_text(); ?></div>

			</footer>

		</article><!-- #comment-## -->

	<?php
			break;
	endswitch;
}

// List comments in single page
function thinkup_input_comments() {
	$args = array(
		'callback' => 'thinkup_input_commenttemplate',
	);
	wp_list_comments( $args );
}