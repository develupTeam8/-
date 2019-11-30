import React, { Fragment } from "react";
import styled from "styled-components";
import Footer from "../Footer";

const Body = styled.div`
  width: 1050px;
  margin: 0 auto;
`;

function HomeLayout(props) {
  const { children } = props;
  return (
    <Fragment>
      <Body>{children}</Body>
      <Footer />
    </Fragment>
  );
}

export default HomeLayout;
