import React from "react";
import styled from "styled-components";
import BaseLayout from "../../components/Layout/BaseLayout";
import PhotoSlideContainer from "./PhotoSlide";
import WriterProfile from "./WriterProfile";
import Comment from "./Comment";

const Container = styled.div`
	position: relative;
	margin-top: 50px;
`;

const ProductDetailPresenter = () => (
	<BaseLayout>
		<Container>
			<PhotoSlideContainer />
			<WriterProfile />
		</Container>
		<Comment />
	</BaseLayout>
);

export default ProductDetailPresenter;
