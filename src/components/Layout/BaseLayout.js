import React from "react";
import styled from "styled-components";
import NavBar from "../NavBar";

const Body = styled.div`
  width: 1050px;
  margin: 0 auto;
`;

function BaseLayout(props) {
  const { children } = props;
  return (
    <>
      <NavBar />
      <Body>{children}</Body>
    </>
  );
}

export default BaseLayout;
