<?php
define( 'WP_CACHE', true );
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'ryEo9GJyOKgx7l' );

/** Database username */
define( 'DB_USER', 'ryEo9GJyOKgx7l' );

/** Database password */
define( 'DB_PASSWORD', 'y7NNkIwyo6dnX4' );

/** Database hostname */
define( 'DB_HOST', 'localhost:3306' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'e7i{(g3D-Pt[dgdDS(7tpzm?U:{xhq4%gIl*f%w##4eK8%48RVM}69pfL{`7{0>l' );
define( 'SECURE_AUTH_KEY',   'V%Bj$v0*{}9n;HdV02t;x/HgXBQUU|mxGWV>RA&? XZ.!SVq%xbz93/*Agw{P|PQ' );
define( 'LOGGED_IN_KEY',     'W5&)B[D$PsKsb~jYzT-yC[7RI6 ;^CQraMoW>VdhE<wK&|?=p)M RT5= eE9/`[4' );
define( 'NONCE_KEY',         'kG7XWq`%Ge_T]?Djw]Px`tREBeS0hX4/g^F/K8T;P@i7*#Bj8W{a4Lmy7g`Udg (' );
define( 'AUTH_SALT',         'RDn3e4XTSFoQ&1}*WV668w;0Cme9s-U$.BsGF}brO=k/]mfUPM&> alr.$})5(//' );
define( 'SECURE_AUTH_SALT',  '|DtRpRA]tbQ7A$XAzfuGO|M[Hi!+P:oCVuinl!m2r&lYV2qb7S8@I(s%*:4I  gy' );
define( 'LOGGED_IN_SALT',    'B4d|>(8<0&]zy]mB>JlXlj{3s4g_r}PPI{Jm*IE%A>L.Ped,,riLG@*`UAFC$u.v' );
define( 'NONCE_SALT',        'U.ZwCRN!wyuCQ|V%N@i,Jye8(+`:H1x({jU7~k7ahuSL6fi;-oN(mT4C I$[Bhx*' );
define( 'WP_CACHE_KEY_SALT', '~C@xJlLy/a|cQ3rOKANZb,3+zeRPu5^1V=)#yy(mYgnP]^a{Suo)2+<japIG)qW9' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
