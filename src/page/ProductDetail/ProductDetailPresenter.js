import React from "react";
import styled from "styled-components";
import BaseLayout from "../../components/Layout/BaseLayout";
import PhotoSlideContainer from "./PhotoSlide";
import DetailText from "./DetailText";
import Comment from "./Comment";

const Container = styled.div`
	position: relative;
	margin-top: 50px;
`;

const BG = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background: #f0f0f0;
	z-index: -1;
`;

const ProductDetailPresenter = () => (
	<BaseLayout>
		<BG />
		<Container>
			<PhotoSlideContainer />
			<DetailText />
		</Container>
		<Comment />
	</BaseLayout>
);

export default ProductDetailPresenter;
