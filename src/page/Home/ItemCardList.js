import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import ItemCard from "./ItemCard";

const Container = styled.div`
  width: 560px;
  display: grid;
  grid-template-rows: repeat(2, 150px);
  grid-template-columns: repeat(4, 130px);
  grid-gap: 10px;
`;

function ItemCardList({ items }) {
  return (
    <Container>
      <ItemCard />
      <ItemCard />
      <ItemCard />
    </Container>
  );
}

ItemCardList.propTypes = {
  items: PropTypes.array.isRequired
};

export default ItemCardList;
