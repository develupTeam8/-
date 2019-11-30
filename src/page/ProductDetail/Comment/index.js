import React from "react";
import styled from "styled-components";

const Container = styled.div`
	background: #fff;
	margin: 30px 0 50px;
`;

const Title = styled.div`
	padding: 30px 30px;
	border-bottom: 1px solid #707070;
	font-size: 20px;
	font-weight: 600;
`;

const CommnetBox = styled.div`
	font-size: 15px;
	padding: 30px 30px;
	border-bottom: 1px solid #f0f0f0;
`;

const WrapProfile = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 20px;
`;

const ProfileImg = styled.div`
	display: inline-block;
	width: 40px;
	height: 40px;
	margin-right: 10px;
	background: #999;
	border-radius: 50%;
`;

const CommentTime = styled.div`
	color: #a7a5a5;
	margin-left: 10px;
`;

const WrapCommentInput = styled.div`
	position: relative;
	height: 60px;
	padding: 0 30px;
	input {
		height: 100%;
		width: 100%;
		border: 0;
		font-size: 15px;
	}
	button {
		position: absolute;
		top: 20%;
		right: 30px;
		height: 60%;
		padding: 0 23px;
		border-radius: 25px;
		background: #ffc03b;
	}
`;

const commentArr = [
	{
		img: "",
		name: "주먹밥",
		massage: "유통기한 좀 알려주세요~",
		time: "11:10"
	},
	{
		img: "",
		name: "냥냥2",
		massage: "팔렸나요?",
		time: "11:11"
	}
];

export default class extends React.Component {
	constructor(props) {
		super(props);
		this.textInput = React.createRef();
		this.focusTextInput = this.focusTextInput.bind(this);
	}

	focusTextInput(e) {
		e.preventDefault();
		this.textInput.current.value.length > 0
			? console.log("댓글 등록하기")
			: console.log("댓글 등록 못함");
	}

	render() {
		return (
			<>
				<Container>
					<Title>댓글</Title>
					{commentArr.length > 0 &&
						commentArr.map((val, i) => (
							<CommnetBox key={i}>
								<WrapProfile>
									<ProfileImg />
									<span>{val.name}님</span>
									<CommentTime>{val.time}</CommentTime>
								</WrapProfile>
								<span>{val.massage}</span>
							</CommnetBox>
						))}
					<WrapCommentInput>
						<input
							placeholder="댓글을 입력해주세요"
							ref={this.textInput}></input>
						<button onClick={this.focusTextInput}>입력하기</button>
					</WrapCommentInput>
				</Container>
			</>
		);
	}
}
