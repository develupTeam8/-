import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const CardCover = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;
const CardModalTemplate = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50%;
  padding: 15px 25px 15px 25px;
  background: white;
  transform: translate(0, 100%);
  transition: 0.25s linear;
`;

const ItemContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const ItemTitle = styled.div`
  width: 100%;
  span {
    font-size: 18px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;

    color: #262626;
  }
`;
const ItemInfo = styled.div`
  margin-top: 1rem;
  width: 100%;
  height: 20px;
  span {
    font-size: 10px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.71;
    letter-spacing: normal;

    color: #262626;
  }
`;
const ItemPrice = styled.span`
  position: absolute;
  bottom: 0;
  left: 0%;

  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: normal;
  color: #d85d5d;
`;
const ItemDetail = styled.div`
  cursor: pointer;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 60px;
  height: 21px;
  border-radius: 10px;
  border: solid 1px #3572ff;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    font-size: 12px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.71;
    letter-spacing: normal;

    color: #2f77ff;
  }
`;

const CardContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #fffba8;
  &:hover {
    ${CardCover} {
      background: gray;
      opacity: 0.7;
    }
    ${CardModalTemplate} {
      transform: translate(0, 0);
    }
  }
`;

//아이템 정보 최대글자 14 그 이후 ...처리
function ItemCard() {
  return (
    <CardContainer>
      <CardCover />
      <CardModalTemplate>
        <ItemContent>
          <ItemTitle>
            <span>고양이 사료팔아요.</span>
          </ItemTitle>
          <ItemInfo>
            <span>사료가 남아요요요요요요ㅛ요요</span>
          </ItemInfo>
          <ItemPrice>₩ 5000원</ItemPrice>
          <ItemDetail>
            <span>상세보기</span>
          </ItemDetail>
        </ItemContent>
      </CardModalTemplate>
    </CardContainer>
  );
}

export default ItemCard;
