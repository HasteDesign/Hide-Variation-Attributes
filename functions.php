<?php

/**
 * Enqueue scripts
 * 
 * @since 1.0
 */
function hide_va_enqueue_scripts() {
    wp_enqueue_script( 'hide-variation-attributes', plugins_url( 'assets/js/hide-attributes.js', __FILE__ ), array( 'wc-add-to-cart-variation' ), false, true );
}
add_action( 'wp_enqueue_scripts', 'hide_va_enqueue_scripts' );