<?php
namespace Trustify\Inc;

/**
 * Class Main
 *
 * Handles the loading and initialization of  Trustify\Inc blocks.
 *
 * @package T Trustify\Inc
 * @since 1.0.0
 */

if (!defined('ABSPATH')) {
    exit;
}

class Main {
    /**
     * Instance of the main class.
     *
     * @var Main
     */
    private static $instance = null;

    /**
     * Get the singleton instance.
     *
     * @return Main
     */
    public static function get_instance() {
        if (null === self::$instance) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    /**
     * Initialize the main class.
     */
    private function __construct() {
        $this->init_hooks();
    }

    /**
     * Initialize WordPress hooks.
     *
     * @return void
     */
    private function init_hooks() {
        add_action('init', [$this, 'register_blocks']);
        add_action('enqueue_block_editor_assets', [$this, 'enqueue_editor_assets']);
        add_action('wp_enqueue_scripts', [$this, 'enqueue_frontend_assets']);
    }

    /**
     * Register all blocks.
     */
    public function register_blocks() {
        if (function_exists('wp_register_block_types_from_metadata_collection')) {
            wp_register_block_types_from_metadata_collection(
                TRUSTIFY_BLOCKS_DIR . 'blocks/build',
                TRUSTIFY_BLOCKS_DIR . 'blocks/build/blocks-manifest.php'
            );
            return;
        }

        if (function_exists('wp_register_block_metadata_collection')) {
            wp_register_block_metadata_collection(
                TRUSTIFY_BLOCKS_DIR . 'blocks/build',
                TRUSTIFY_BLOCKS_DIR . 'blocks/build/blocks-manifest.php'
            );
        }

        $manifest_data = require TRUSTIFY_BLOCKS_DIR . 'blocks/build/blocks-manifest.php';
        foreach (array_keys($manifest_data) as $block_type) {
            register_block_type(TRUSTIFY_BLOCKS_DIR . "blocks/build/{$block_type}");
        }
    }

    /**
     * Enqueue editor-specific assets.
     */
    public function enqueue_editor_assets() {

    }

    /**
     * Enqueue frontend assets.
     */
    public function enqueue_frontend_assets() {
    
    }

    /**
     * Prevent cloning of the instance.
     *
     * @return void
     */
    private function __clone() {}

    /**
     * Prevent unserializing of the instance.
     *
     * @return void
     */
    public function __wakeup() {
        throw new \Exception("Cannot unserialize singleton");
    }
}