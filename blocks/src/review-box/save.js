import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const {
        reviewerName,
        reviewerTitle,
        reviewContent,
        reviewerImage,
        rating
    } = attributes;

    return (
        <div {...useBlockProps.save({
            className: 'trustify-review'
        })}>
        
            <div className="trustify-review-header">
                {reviewerImage && (
                    <img
                        src={reviewerImage}
                        alt={reviewerName}
                        className="trustify-review-avatar"
                    />
                )}
                <div>
                    <strong className="trustify-review-name">{reviewerName}</strong>
                    {reviewerTitle && (
                        <div className="trustify-review-title">{reviewerTitle}</div>
                    )}
                    <div className="trustify-review-stars">
                        {'★'.repeat(rating) + '☆'.repeat(5 - rating)}
                    </div>
                </div>
            </div>
            <RichText.Content
                tagName="div"
                className="trustify-review-content"
                value={reviewContent}
            />
        </div>
    );
}