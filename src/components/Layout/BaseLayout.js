import React, { Fragment } from "react";
import styled from "styled-components";
import NavBar from "../NavBar";
import Footer from "../Footer";

const Body = styled.div`
  width: 1050px;
  margin: 0 auto;
`;

function BaseLayout(props) {
  const { children } = props;
  return (
    <Fragment>
      <NavBar />
      <Body>{children}</Body>
      <Footer />
    </Fragment>
  );
}

export default BaseLayout;