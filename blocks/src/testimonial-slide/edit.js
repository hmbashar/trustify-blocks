import { __ } from '@wordpress/i18n';
import {
    useBlockProps,
    MediaUpload,
    RichText,
    InspectorControls
} from '@wordpress/block-editor';
import {
    PanelBody,
    TextControl,
    RangeControl,
    Button
} from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
    const {
        reviewerName,
        reviewerTitle,
        reviewContent,
        reviewerImage,
        rating
    } = attributes;

    const blockProps = useBlockProps({
        className: 'trustify-slide'
    });

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Reviewer Info', 'trustify-blocks')}>
                    <TextControl
                        label={__('Reviewer Name', 'trustify-blocks')}
                        value={reviewerName}
                        onChange={(value) => setAttributes({ reviewerName: value })}
                    />
                    <TextControl
                        label={__('Reviewer Title', 'trustify-blocks')}
                        value={reviewerTitle}
                        onChange={(value) => setAttributes({ reviewerTitle: value })}
                    />
                    <RangeControl
                        label={__('Star Rating', 'trustify-blocks')}
                        value={rating}
                        onChange={(value) => setAttributes({ rating: value })}
                        min={1}
                        max={5}
                    />
                    <MediaUpload
                        onSelect={(media) => setAttributes({ reviewerImage: media.url })}
                        allowedTypes={['image']}
                        value={reviewerImage}
                        render={({ open }) => (
                            <Button onClick={open} isSecondary>
                                {reviewerImage
                                    ? __('Change Reviewer Image', 'trustify-blocks')
                                    : __('Upload Reviewer Image', 'trustify-blocks')}
                            </Button>
                        )}
                    />
                </PanelBody>
            </InspectorControls>

            <div {...blockProps}>
                {reviewerImage && (
                    <img
                        src={reviewerImage}
                        alt={reviewerName}
                        className="trustify-slide-avatar"
                    />
                )}
                <div className="trustify-slide-stars">
                    {'★'.repeat(rating) + '☆'.repeat(5 - rating)}
                </div>
                <RichText
                    tagName="div"
                    className="trustify-slide-content"
                    value={reviewContent}
                    allowedFormats={['core/bold', 'core/italic', 'core/link']}
                    onChange={(value) => setAttributes({ reviewContent: value })}
                    placeholder={__('Add testimonial…', 'trustify-blocks')}
                />
                <strong className="trustify-slide-name">{reviewerName}</strong>
                {reviewerTitle && (
                    <div className="trustify-slide-title">{reviewerTitle}</div>
                )}
            </div>
        </>
    );
}