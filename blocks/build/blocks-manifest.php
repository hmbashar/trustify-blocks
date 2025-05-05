<?php
// This file is generated. Do not modify it manually.
return array(
	'review-box' => array(
		'apiVersion' => 3,
		'name' => 'trustify/review-box',
		'title' => 'Review Box',
		'category' => 'widgets',
		'icon' => 'star-filled',
		'description' => 'A simple review block with reviewer name, title, content, and star rating.',
		'attributes' => array(
			'reviewerName' => array(
				'type' => 'string',
				'default' => ''
			),
			'reviewerTitle' => array(
				'type' => 'string',
				'default' => ''
			),
			'reviewContent' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => '.trustify-review-content'
			),
			'reviewerImage' => array(
				'type' => 'string',
				'default' => ''
			),
			'rating' => array(
				'type' => 'number',
				'default' => 5
			)
		),
		'supports' => array(
			'html' => false,
			'color' => array(
				'background' => true,
				'text' => true
			),
			'typography' => true
		),
		'editorScript' => 'file:./index.js',
		'style' => 'file:./style-index.css'
	)
);
