import React from "react";
import styled from "styled-components";
// import Slider from "infinite-react-carousel";
import Carousel from "nuka-carousel";

const WrapSlider = styled(Carousel)`
	display: inline-block !important;
	width: 50% !important;
	ul {
		display: flex !important;
		align-items: center;
		background: rgb(0, 0, 0);
		button {
			display: none;
		}
	}
	li {
		height: initial !important;
		top: auto !important;
		min-height: 525px;
	}
	img {
		width: 100%;
		height: 100%;
	}
`;

const imgArr = [
	"https://www.nutripet.co.kr/files/attach/images/475/247/001/c108e7ec1e685972b20693c255a2b850.jpg",
	"http://gdimg.gmarket.co.kr/1625032945/still/600?ver=1566975217"
];

const PhotoSlider = () => (
	<>
		<WrapSlider>
			{imgArr.map((val, i) => (
				// <div key={i}>
				<img key={i} alt="" src={val} />
				// </div>
			))}
		</WrapSlider>
	</>
);

export default PhotoSlider;
