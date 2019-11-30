import React from "react";
import styled from "styled-components";

const Container = styled.div`
	margin-top: 100px;
`;

const Title = styled.div`
	font-size: 30px;
	padding-bottom: 30px;
	margin-bottom: 70px;
	border-bottom: 1px solid #534d4d;
`;

const MyWritingArr = [];
const MyWriting = () => (
	<>
		<Container>
			<Title>내 작성글</Title>
			{MyWritingArr.length > 0
				? MyWritingArr.map((val, i) => console.log(val))
				: "작성 글이 없습니다."}
		</Container>
	</>
);

export default MyWriting;
