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
				<div class="swiper-pagination"></div>
				<div class="swiper-button-prev"></div>
				<div class="swiper-button-next"></div>
			</div>
		</div>
	);
}
