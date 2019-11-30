import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const ItemWrapper = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;

  background: #fded3c;
  border-radius: 24px;

  font-size: 17px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.18;
  letter-spacing: normal;
  color: #262626;

  &:hover {
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  }
  ${props =>
    props.selected &&
    css`
      background: #ffe4b5;
      transform: scale(1.2);
    `}
`;

function TagItem({ item }) {
  return <ItemWrapper selected={item.checked}>#{item.name}</ItemWrapper>;
}

TagItem.propTypes = {
  item: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired
    })
  )
};

export default React.memo(TagItem);
