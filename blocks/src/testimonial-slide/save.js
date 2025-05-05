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
            className: 'swiper-slide trustify-slide'
        })}>
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
            <RichText.Content
                tagName="div"
                className="trustify-slide-content"
                value={reviewContent}
            />
            <strong className="trustify-slide-name">{reviewerName}</strong>
            {reviewerTitle && (
                <div className="trustify-slide-title">{reviewerTitle}</div>
            )}
        </div>
    );
}