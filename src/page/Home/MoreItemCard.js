import React from "react";
import styled from "styled-components";
import { MdAdd } from "react-icons/md";
const CardContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #f7f7f7;
  padding: 0 25px 0 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #534d4d;
  transition: 0.5s linear;
  &:hover {
    background-color: #ff8787;
    color: white;
  }
`;

const PlusContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const PlusMark = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    font-family: Lato;
    font-size: 40px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.39;
    letter-spacing: normal;
  }
`;
const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    font-family: Lato;
    font-size: 30px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.39;
    letter-spacing: normal;
  }
`;

function MoreItemCard() {
  return (
    <CardContainer>
      <PlusContainer>
        <PlusMark>
          <span>
            <MdAdd />
          </span>
        </PlusMark>
        <Title>
          <span>상품 더보기</span>
        </Title>
      </PlusContainer>
    </CardContainer>
  );
}
export default MoreItemCard;
