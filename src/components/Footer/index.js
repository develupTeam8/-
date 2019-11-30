import React from "react";
import styled from "styled-components";
import insta from "../../images/ins.png";
import twi from "../../images/twi.png";
import fb from "../../images/fb.png";

const FooterContainer = styled.footer`
  width: 100%;
  height: 200px;
  background-color: #fde827;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContentContainer = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;
const Content = styled.div`
  display: inline-block;
  span {
    font-size: 12px;
    font-weight: bold;
  }
  &::after {
    content: "|";
    margin-left: 5px;
  }
  & + & {
    margin-left: 5px;
  }
  &:last-child {
    &::after {
      content: none;
    }
  }
`;

const ConCatContent = styled.div`
  display: inline-block;
  width: 24px;
  height: 24px;

  & + & {
    margin-left: 30px;
  }

  &:nth-child(1) {
    background-image: url(${insta});
  }
  &:nth-child(2) {
    background-image: url(${twi});
  }
  &:nth-child(3) {
    background-image: url(${fb});
  }
  background-size: contain;
  background-repeat: no-repeat;
`;

function Footer() {
  return (
    <FooterContainer>
      <ContentContainer>
        <Content>
          <span>이용약관</span>
        </Content>
        <Content>
          <span>개인정보 취급방침</span>
        </Content>
        <Content>
          <span>About Us</span>
        </Content>
      </ContentContainer>
      <ContentContainer>
        <Content>
          <span>데벨업 해커톤</span>
        </Content>
      </ContentContainer>
      <ContentContainer>
        <Content>
          <span>Copyright &copy; DevelUp 8 Team. All rights reserved.</span>
        </Content>
      </ContentContainer>
      <ContentContainer>
        <ConCatContent />
        <ConCatContent />
        <ConCatContent />
      </ContentContainer>
    </FooterContainer>
  );
}

export default Footer;
