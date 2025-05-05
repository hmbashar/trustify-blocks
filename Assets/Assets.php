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

    }
}