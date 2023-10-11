<?php
/**
 * Footer Default
 * 
 * slug: footer-default
 * title: Footer Default
 * categories: physiotherapy-clinic
 */

return array(
    'title'      =>__( 'Footer Default', 'physiotherapy-clinic' ),
    'categories' => array( 'physiotherapy-clinic' ),
    'content'    => '<!-- wp:group {"style":{"elements":{"link":{"color":{"text":"var:preset|color|fourground"}}}},"backgroundColor":"black","textColor":"background","layout":{"type":"constrained","contentSize":"80%"}} -->
<div class="wp-block-group has-background-color has-black-background-color has-text-color has-background has-link-color"><!-- wp:columns {"style":{"spacing":{"padding":{"top":"50px","bottom":"50px","right":"20px","left":"20px"}}},"className":"alignwide"} -->
<div class="wp-block-columns alignwide" style="padding-top:50px;padding-right:20px;padding-bottom:50px;padding-left:20px"><!-- wp:column {"style":{"spacing":{"blockGap":"20px"}}} -->
<div class="wp-block-column"><!-- wp:heading {"style":{"typography":{"fontSize":"22px"}},"textColor":"accent"} -->
<h2 class="wp-block-heading has-accent-color has-text-color" style="font-size:22px"><strong>'. esc_html('About Us','physiotherapy-clinic') .'</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"style":{"typography":{"lineHeight":"2.2"}},"className":"footer-about"} -->
<p class="footer-about" style="line-height:2.2">'. esc_html('Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','physiotherapy-clinic') .'</p>
<!-- /wp:paragraph --></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:heading {"style":{"typography":{"fontSize":"22px"}},"textColor":"accent"} -->
<h2 class="wp-block-heading has-accent-color has-text-color" style="font-size:22px"><strong>'. esc_html('Quick Links','physiotherapy-clinic') .'</strong></h2>
<!-- /wp:heading -->

<!-- wp:navigation {"className":"footer-menu-box","layout":{"type":"flex","justifyContent":"center"}} -->
<!-- wp:navigation-link {"label":"Home","type":"","url":"#","kind":"custom","isTopLevelLink":true} /-->

<!-- wp:navigation-link {"label":"About Us","type":"","url":"#","kind":"custom","isTopLevelLink":true} /-->

<!-- wp:navigation-link {"label":"Services","type":"","url":"#","kind":"custom","isTopLevelLink":true} /-->

<!-- wp:navigation-link {"label":"Terms \u0026 Condition","type":"","url":"#","kind":"custom","isTopLevelLink":true} /-->

<!-- wp:navigation-link {"label":"Privacy Policy","type":"","url":"#","kind":"custom","isTopLevelLink":true} /-->

<!-- wp:navigation-link {"label":"Contact Us","type":"","url":"#","kind":"custom","isTopLevelLink":true} /-->
<!-- /wp:navigation --></div>
<!-- /wp:column -->

<!-- wp:column {"style":{"spacing":{"blockGap":"20px"}}} -->
<div class="wp-block-column"><!-- wp:heading {"style":{"typography":{"fontSize":"22px"}},"textColor":"accent"} -->
<h2 class="wp-block-heading has-accent-color has-text-color" style="font-size:22px"><strong>'. esc_html('Contact Us','physiotherapy-clinic') .'</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"left"} -->
<p class="has-text-align-left"><span class="dashicons dashicons-email-alt"></span>  '. esc_html('support123@example.com','physiotherapy-clinic') .'</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><span class="dashicons dashicons-phone"></span>  +123 456 7890</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><span class="dashicons dashicons-admin-home"></span>  '. esc_html('123, Red Hills, Chicago,IL, USA','physiotherapy-clinic') .'</p>
<!-- /wp:paragraph --></div>
<!-- /wp:column -->

<!-- wp:column {"style":{"spacing":{"blockGap":"20px"}}} -->
<div class="wp-block-column"><!-- wp:heading {"style":{"typography":{"fontSize":"22px"}},"textColor":"accent"} -->
<h2 class="wp-block-heading has-accent-color has-text-color" style="font-size:22px"><strong>'. esc_html('Recent Post','physiotherapy-clinic') .'</strong></h2>
<!-- /wp:heading -->

<!-- wp:latest-posts {"displayPostContent":true,"excerptLength":10,"featuredImageAlign":"left","featuredImageSizeWidth":38,"featuredImageSizeHeight":38} /--></div>
<!-- /wp:column --></div>
<!-- /wp:columns --></div>
<!-- /wp:group -->

<!-- wp:group {"backgroundColor":"accent","className":"footertext","layout":{"type":"constrained"}} -->
<div class="wp-block-group footertext has-accent-background-color has-background"><!-- wp:paragraph {"align":"center","textColor":"background","className":"has-link-color","fontSize":"medium"} -->
<p class="has-text-align-center has-link-color has-background-color has-text-color has-medium-font-size">'. esc_html('Proudly Powered By WPRadiant','physiotherapy-clinic') .'</p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->',
);