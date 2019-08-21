<?php
/**
 * Plugin Name: WP HighlightJS
 * Plugin URI: https://github.com/srikat/WP-HighlightJS
 * Description: Loads HighlightJS and clipboard.js on singular pages for syntax highlighting with a 1-click copy to clipboard button.
 * Version: 2.0.0
 * Author: Sridhar Katakam
 * Author URI: https://sridharkatakam.com/
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * GitHub Plugin URI: srikat/WP-HighlightJS
 *
 * This program is free software; you can redistribute it and/or modify it under the terms of the GNU
 * General Public License version 2, as published by the Free Software Foundation.  You may NOT assume
 * that you can use any other version of the GPL.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without
 * even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 *
 */

if ( ! defined( 'WPINC' ) ) {
	die;
}

add_action( 'wp_enqueue_scripts', 'wphjs_enqueue_wphighlightjs' );
/**
 * Load HighlightJS and clipboard JS on single entries.
 */
function wphjs_enqueue_wphighlightjs() {

	// if this is not a singular post, abort.
	if ( ! is_singular() ) {
		return;
	}

	wp_enqueue_style( 'highlightjs-css', plugin_dir_url( __FILE__ ) . 'assets/css/style.css' );

	wp_enqueue_style( 'google-fonts', '//fonts.googleapis.com/css?family=Source+Code+Pro&display=swap' );

	wp_enqueue_script( 'clipboard', plugin_dir_url( __FILE__ ) . 'assets/js/clipboard.min.js', '', '2.0.4', true );

	wp_enqueue_script( 'highlightjs', plugin_dir_url( __FILE__ ) . 'assets/js/highlight.pack.js', '', '9.15.10', true );

	wp_enqueue_script( 'highlightjs-init', plugin_dir_url( __FILE__ ) . 'assets/js/highlight-init.js', '', '1.0.0', true );

	wp_localize_script( 'highlightjs-init', 'pluginData', array( 'clippyUrl' => plugins_url( 'assets/images/clippy.svg', __FILE__ ) ) );

}
