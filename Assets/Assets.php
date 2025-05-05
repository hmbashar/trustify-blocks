<?php
namespace Trustify\Assets;
class Assets
{

    public function __construct()
    {
        add_action('enqueue_block_assets', [$this, 'enqueue_editor_assets']);
    }


    public function enqueue_editor_assets()
    {
        wp_enqueue_style(
            'trustify-swiper-slider',
            'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css',
            [],
            TRUSTIFY_BLOCKS_VERSION,
            true
        );
        // wp_enqueue_script(
        //     'trustify-swiper-slider',
        //     'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js',
        //     [],
        //     TRUSTIFY_BLOCKS_VERSION,
        //     true
        // );
    }
}