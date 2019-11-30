import React, { useState } from "react";
import styled from "styled-components";

const WrapProfile = styled.div`
	display: flex;
	align-items: center;
	background: #f8f8f8;
	padding-left: 100px;
	height: 350px;
`;
const ProfileImg = styled.div`
	background: #888;
	width: 200px;
	height: 200px;
	border-radius: 100px;
`;
const ProfileText = styled.div`
	margin-left: 100px;
`;
const ProfileName = styled.div`
	font-size: 40px;
	color: #534d4d;
	input {
		display: inline-block;
		width: 180px;
		padding: 0;
		border: none;
		border-bottom: 1px solid;
		outline: none;
		background: transparent;
		font-size: inherit;
	}
	&:after {
		content: "님";
		position: relative;
		left: 10px;
		font-size: 20px;
	}
`;
const WrapButton = styled.div`
	margin-top: 40px;
	button {
		display: inline-block;
		background: #fded3c;
		padding: 15px 40px;
		border-radius: 25px;
		font-size: 15px;
		font-weight: 600;
		margin-right: 20px;
		color: #262626;
	}
`;

function Profile() {
	const [isToggledOn, setToggle] = useState(false);
	const toggle = () => setToggle(!isToggledOn);
	return (
		<>
			<WrapProfile>
				<ProfileImg />
				<ProfileText>
					<ProfileName>
						{isToggledOn ? (
							"박소현"
						) : (
							<input defaultValue="박소현" />
						)}
					</ProfileName>
					<WrapButton>
						<button onClick={toggle}>
							{isToggledOn
								? "프로필 저장하기"
								: "프로필 수정하기"}
						</button>
						<button>글 등록하기</button>
					</WrapButton>
				</ProfileText>
			</WrapProfile>
		</>
	);
}

export default Profile;
