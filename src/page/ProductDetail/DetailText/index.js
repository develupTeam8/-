import React from "react";
import styled from "styled-components";

const Container = styled.div`
	position: absolute;
	display: inline-block;
	width: 50%;
	height: calc(100% - 4px);
	vertical-align: top;
	background: #fff;
`;

const WrapTitle = styled.div`
	border-bottom: 1px solid #707070;
	padding: 30px;
`;

const Title = styled.div`
	font-size: 20px;
	font-weight: 600;
`;

const Profile = styled.div`
	display: flex;
	align-items: center;
	margin-top: 15px;
	font-size: 15px;
`;
const ProfileImg = styled.div`
	display: inline-block;
	width: 40px;
	height: 40px;
	margin-right: 10px;
	border-radius: 50%;
	background: url("https://www.gannett-cdn.com/presto/2019/11/14/PSAL/b23f78ae-5321-40ec-aa25-dfce9e639ddd-Liberty.jpg?crop=3263,2447,x0,y0&width=640");
	background-size: cover;
`;

const WrapText = styled.div`
	position: absolute;
	bottom: 0;
	padding: 30px;
`;

const Text = styled.div`
	padding: 30px;
`;
const Price = styled.div`
	font-size: 20px;
	font-weight: 600;
`;
const WrapTag = styled.div`
	position: relative;
	bottom: 0;
	margin-top: 20px;
	font-size: 15px;
	font-weight: 600;
	span {
		display: inline-block;
		padding: 10px 40px;
		border-radius: 25px;
		background: #fded3c;
		margin-right: 10px;
		margin-top: 10px;
		cursor: default;
	}
`;

const detail = {
	title: "고양이 사료 팝니다.",
	writer: "보리",
	describes: "고양이가 사료를 안먹어서 팔아요…",
	price: 8000,
	tag: ["고양이", "사료"]
};

const WriteProfile = () => (
	<>
		<Container>
			<WrapTitle>
				<Title>{detail.title}</Title>
				<Profile>
					<ProfileImg />
					{detail.writer}님
				</Profile>
			</WrapTitle>
			<Text>{detail.describes}</Text>
			<WrapText>
				<Price>₩ 가격 : {detail.price}원 </Price>
				<WrapTag>
					{detail.tag.map((val, i) => (
						<span key={i}>{val}</span>
					))}
				</WrapTag>
			</WrapText>
		</Container>
	</>
);

export default WriteProfile;
