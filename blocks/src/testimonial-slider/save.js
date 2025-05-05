import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { autoplay, speed } = attributes;

	return (
		<div
			{...useBlockProps.save({
				className: "trustify-slider",
				"data-autoplay": autoplay,
				"data-speed": speed,
			})}
		>
			<div className="swiper">
				<div className="swiper-wrapper">
					<InnerBlocks.Content />
				</div>
				<div className="swiper-pagination"></div>
				<div className="swiper-button-next"></div>
				<div className="swiper-button-prev"></div>
			</div>
		</div>
	);
}
