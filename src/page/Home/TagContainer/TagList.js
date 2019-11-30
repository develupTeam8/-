import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import TagItem from "./TagItem";

const Container = styled.div`
  width: 100%;
  margin-top: 50px;
`;

const TagContainer = styled.div`
  width: 100%;
  padding: 10px 0 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function TagList({ tags }) {
  const first_line = tags.slice(0, 6);
  const second_line = tags.slice(6, 12);
  const third_line = tags.slice(12, 18);
  return (
    <Container>
      <TagContainer>
        {first_line.map(elem => (
          <TagItem key={elem.id} item={elem} />
        ))}
      </TagContainer>
      <TagContainer>
        {second_line.map(elem => (
          <TagItem key={elem.id} item={elem} />
        ))}
      </TagContainer>
      <TagContainer>
        {third_line.map(elem => (
          <TagItem key={elem.id} item={elem} />
        ))}
      </TagContainer>
    </Container>
  );
}

TagList.propType = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired
    })
  )
};

export default TagList;
