import React from "react";
import styled from "styled-components";
import main from "../../images/main.jpg";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url(${main});
  background-size: cover;
`;
const Title = styled.div`
  position: absolute;
  left: 90px;
  top: 250px;
  span {
    font-family: Lato;
    font-size: 60px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.4;
    letter-spacing: normal;
    text-align: left;
    color: #534d4d;
  }
`;
const Subtitle = styled.div`
  position: absolute;
  left: 100px;
  top: 500px;
  span {
    font-family: Roboto;
    font-size: 20px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.45;
    letter-spacing: normal;

    color: #534d4d;
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
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffbe3b;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

function HomeHeader() {
  return (
    <Wrapper>
      <Title>
        <span>우리집 고양이가</span>
        <br />
        <span>안 쓰는 물건을 팔아보아요.</span>
      </Title>
      <Subtitle>
        <span>중고양이는 고양이를 위한 중고용품 거래 서비스 입니다.</span>
      </Subtitle>
      <StartButton>Get Start</StartButton>
    </Wrapper>
  );
}

export default HomeHeader;
