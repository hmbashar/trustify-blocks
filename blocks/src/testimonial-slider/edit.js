import { __ } from '@wordpress/i18n';
import {
    useBlockProps,
    InnerBlocks,
    InspectorControls
} from '@wordpress/block-editor';
import {
    PanelBody,
    ToggleControl,
    RangeControl
} from '@wordpress/components';

const ALLOWED_BLOCKS = ['trustify/testimonial-slide'];

export default function Edit({ attributes, setAttributes }) {
    const { autoplay, speed } = attributes;

    const blockProps = useBlockProps({
        className: 'trustify-slider'
    });

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Slider Settings', 'trustify-blocks')}>
                    <ToggleControl
                        label={__('Autoplay', 'trustify-blocks')}
                        checked={autoplay}
                        onChange={(value) => setAttributes({ autoplay: value })}
                    />
                    <RangeControl
                        label={__('Autoplay Speed (ms)', 'trustify-blocks')}
                        value={speed}
                        onChange={(value) => setAttributes({ speed: value })}
                        min={1000}
                        max={10000}
                        step={500}
                    />
                </PanelBody>
            </InspectorControls>

            <div {...blockProps}>
                <InnerBlocks
                    allowedBlocks={ALLOWED_BLOCKS}
                    template={[['trustify/testimonial-slide']]}
                    templateLock={false}
                />
            </div>
        </>
    );
}