import React from "react";
import styled from "styled-components";
import TagList from "./TagList";

const BackGroundWrapper = styled.div`
  width: 100%;
  background-color: #f8f8f8;
  padding: 70px 0 70px 0;
`;
const Wrapper = styled.div`
  width: 1050px;
  margin: 0 auto;
`;

const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    font-size: 40px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.38;
    letter-spacing: normal;

    color: #534d4d;
  }
`;

const tags = [
  { id: 1, name: "사료", checked: false },
  { id: 2, name: "캔/간식", checked: false },
  { id: 3, name: "모래", checked: false },
  { id: 4, name: "탈취제", checked: false },
  { id: 5, name: "화장실", checked: true },
  { id: 6, name: "매트", checked: false },
  { id: 7, name: "건강관리", checked: false },
  { id: 8, name: "목욕", checked: false },
  { id: 9, name: "미용", checked: true },
  { id: 10, name: "장난감", checked: false },
  { id: 11, name: "식기", checked: false },
  { id: 12, name: "스크래쳐", checked: false },
  { id: 13, name: "캣타워", checked: false },
  { id: 14, name: "하우스", checked: false },
  { id: 15, name: "쿠션", checked: true },
  { id: 16, name: "이동장", checked: false },
  { id: 17, name: "하네스", checked: false },
  { id: 18, name: "잡화", checked: false }
];

function TagContainer() {
  return (
    <BackGroundWrapper>
      <Wrapper>
        <Title>
          <span>#태그 검색</span>
        </Title>
        <TagList tags={tags} />
      </Wrapper>
    </BackGroundWrapper>
  );
}

export default TagContainer;
