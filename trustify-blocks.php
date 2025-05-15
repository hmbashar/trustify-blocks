<?php
/**
 * Plugin Name: Trustify Blocks
 * Description: A collection of custom Gutenberg blocks for WordPress that help build trust and credibility with website visitors through social proof elements, and trust indicators
 * Version: 1.0.0
 * Author: Md Abul Bashar
 * Author URI: https://facebook.com/hmbashar
 * License: GPL-2.0-or-later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: trustify-blocks
 * Requires PHP: 8.0
 *
 * @package TrustifyBlocks
 */
namespace Trustify;

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

final class Trustify_Blocks
{

    /**
     * Singleton instance.
     *
     * @var Trustify_Blocks|null
     */
    private static $instance = null;

    /**
     * Get class instance.
     *
     * @return Trustify_Blocks
     */
    public static function get_instance(): Trustify_Blocks
    {
        if (self::$instance === null) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    /**
     * Constructor (private).
     */
    private function __construct()
    {
        $this->define_constants();
        $this->init_plugin();
    }

    /**
     * Define plugin constants.
     */
    private function define_constants()
    {
        define('TRUSTIFY_BLOCKS_VERSION', '1.0.0');
        define('TRUSTIFY_BLOCKS_DIR', plugin_dir_path(__FILE__));
        define('TRUSTIFY_BLOCKS_URL', plugin_dir_url(__FILE__));
    }

    /**
     * Initialize plugin functionality.
     */
    private function init_plugin()
    {
        // Include Main class
        if (!class_exists('\Trustify\Inc\Main')) {
            require_once TRUSTIFY_BLOCKS_DIR . 'Inc/Main.php';
        }

        // Initialize the Main class
        if (class_exists('\Trustify\Inc\Main')) {
            \Trustify\Inc\Main::get_instance();
        } else {
            add_action('admin_notices', function () {
                echo '<div class="notice notice-error"><p>';
                esc_html_e('Trustify Blocks: Required class could not be loaded.', 'trustify-blocks');
                echo '</p></div>';
            });
        }
    }

}


// Kick off the plugin
if (class_exists('\Trustify\Trustify_Blocks')) {
    \Trustify\Trustify_Blocks::get_instance();
}