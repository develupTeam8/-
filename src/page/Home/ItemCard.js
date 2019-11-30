import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const CardCover = styled.div`
  position: absolute;
  border-radius: 15px;
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
  height: 30px;
  background: white;
  transform: translate(0, 100%);
  transition: 0.25s linear;
`;

const CardContainer = styled.div`
  position: relative;
  width: 130px;
  height: 150px;
  overflow: hidden;
  border-radius: 15px;
  border: 1px solid black;
  background: red;
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

function ItemCard() {
  return (
    <CardContainer>
      <CardCover />
      <CardModalTemplate></CardModalTemplate>
    </CardContainer>
  );
}

export default ItemCard;
