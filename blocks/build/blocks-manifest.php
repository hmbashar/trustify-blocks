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
	),
	'testimonial-slide' => array(
		'apiVersion' => 3,
		'name' => 'trustify/testimonial-slide',
		'title' => 'Testimonial Slide',
		'category' => 'widgets',
		'parent' => array(
			'trustify/testimonial-slider'
		),
		'icon' => 'format-quote',
		'description' => 'A single testimonial for the slider.',
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
				'selector' => '.trustify-slide-content'
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
			'anchor' => false,
			'multiple' => true
		),
		'editorScript' => 'file:./index.js',
		'style' => 'file:./style-index.css'
	),
	'testimonial-slider' => array(
		'apiVersion' => 3,
		'name' => 'trustify/testimonial-slider',
		'title' => 'Testimonial Slider',
		'category' => 'widgets',
		'icon' => 'slides',
		'description' => 'A slider to showcase testimonials.',
		'attributes' => array(
			'autoplay' => array(
				'type' => 'boolean',
				'default' => true
			),
			'speed' => array(
				'type' => 'number',
				'default' => 3000
			)
		),
		'supports' => array(
			'html' => false,
			'anchor' => false,
			'multiple' => true
		),
		'editorScript' => 'file:./index.js',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
