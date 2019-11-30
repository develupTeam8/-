import React, { Component } from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 16px;
  color: #888;
  padding: 10px;
`;

const Imagebox = styled.div`
  padding-left: 10px;
`;

class App extends Component {
  render() {
    return (
      <div>
        <Title>이미지 첨부하기 </Title>
        <Imagebox>
          <input type="file" name="file" onChange={null} />
          <button type="button" onClick={null} />
        </Imagebox>
      </div>
    );
  }
}

export default App;
