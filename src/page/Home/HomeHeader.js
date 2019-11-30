import React from "react";
import styled from "styled-components";
import main from "../../images/main.jpg";

const Wrapper = styled.div`
	position: relative;
	width: 100%;
	height: 100vh;
	background-image: url(${main});
	background-size: cover;
	@keyframes slidein {
		from {
			opacity: 0;
			transform: translateY(-20px);
		}

		to {
			opacity: 1;
			transform: translateY(0px);
		}
	}
`;
const Title = styled.div`
	position: absolute;
	left: 90px;
	top: 250px;
	p {
		opacity: 0;
		font-family: Lato;
		font-size: 60px;
		font-weight: bold;
		font-stretch: normal;
		font-style: normal;
		line-height: 1.4;
		letter-spacing: normal;
		text-align: left;
		color: #534d4d;
		animation-fill-mode: forwards;
		/* animation-timing-function: ease-in; */
		&:nth-child(1) {
			animation-duration: 1s;
			animation-name: slidein;
		}
		&:nth-child(2) {
			animation-duration: 1s;
			animation-name: slidein;
			animation-delay: 0.2s;
		}
	}
`;
const Subtitle = styled.div`
	position: absolute;
	left: 100px;
	top: 500px;
	p {
		opacity: 0;
		font-family: Roboto;
		font-size: 20px;
		font-weight: normal;
		font-stretch: normal;
		font-style: normal;
		line-height: 1.45;
		letter-spacing: normal;
		color: #534d4d;
		animation-fill-mode: forwards;
		&:nth-child(1) {
			animation-duration: 1s;
			animation-name: slidein;
			animation-delay: 0.8s;
		}
	}
`;
const StartButton = styled.div`
	position: absolute;
	left: 100px;
	top: 600px;
	cursor: pointer;
	width: 221px;
	height: 72px;
	border-radius: 35px;
	box-shadow: 0px 8px 10px 0 rgba(0, 0, 0, 0.16);
	background-color: #ffbe3b;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	transition: 0.2s;
	transition-timing-function: ease-in-out;
	&:hover {
		transform: translateY(-5px);
	}
`;

function HomeHeader() {
	return (
		<Wrapper>
			<Title>
				<p>우리집 고양이가</p>
				<p>안 쓰는 물건을 팔아보아요.</p>
			</Title>
			<Subtitle>
				<p>중고양이는 고양이를 위한 중고용품 거래 서비스 입니다.</p>
			</Subtitle>
			<StartButton>Get Start</StartButton>
		</Wrapper>
	);
}

export default HomeHeader;
