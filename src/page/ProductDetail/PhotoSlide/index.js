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
		top: auto !important;
	}
	img {
		width: 100%;
		height: 100%;
	}
`;

const imgArr = [
	"https://scontent-lga3-1.cdninstagram.com/vp/ad273e97a942d6d95aeaf67d3fd484ff/5E4FABAF/t51.2885-15/sh0.08/e35/s640x640/71849132_1624267144406805_3613919444984849770_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=109",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2XdfPck_eeUCxae2F-Arb0cUjKK_I-rxm7fyItONz4Tnw5xMd&s"
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
