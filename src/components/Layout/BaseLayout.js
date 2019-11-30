import React from "react";
import styled from "styled-components";

const Body = styled.div`
  width: 1520px;
  margin: 0 auto;
`;

function BaseLayout(props) {
  const { children } = props;
  return <Body>{children}</Body>;
}

export default BaseLayout;
