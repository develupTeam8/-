import React from "react";
import { GoogleLogin } from "react-google-login";
import { googleAPIKey } from "../../googleAPIKey/googleAPIKey";
import styled from "styled-components";
import BaseLayout from "../../components/Layout/BaseLayout";
import { FaGooglePlusG } from "react-icons/fa";
import loginlogo from "../../images/loginlogo.png";

const LoginContainer = styled.div`
  width: 270px;
  margin: 0 auto;

  min-height: calc(100vh - 266px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Logo = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 100%;
  background-color: #ffe4b5;
  background-image: url(${loginlogo});
  background-size: contain;
  background-repeat: no-repeat;
`;
const LogoTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-family: Lato;
    font-size: 30px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.39;
    letter-spacing: normal;
    color: #534d4d;
  }
  margin-top: 20px;
`;
const InfoText = styled.div`
  width: 100%;
  margin-top: 37px;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-family: Lato;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 3.2;
    letter-spacing: normal;

    color: #534d4d;
  }
`;

const GoogleLoginButton = styled(GoogleLogin)`
  margin-top: 20px;
  width: 100%;
  height: 50px;
  border-radius: 5px;

  background-color: #dd4b39;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-family: Poppins;
    font-size: 13px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: 1.36px;

    color: #dd4b39;
  }
`;

function Login() {
  console.log(googleAPIKey);
  const handleResponse = res => {
    console.log(res);
  };
  const handleResponseFail = err => {
    console.log(err);
  };
  return (
    <BaseLayout>
      <LoginContainer>
        <Logo />
        <LogoTitle>
          <span>중고양이</span>
        </LogoTitle>
        <InfoText>
          <span>구글 계정으로 서비스를 이용할 수 있습니다.</span>
        </InfoText>
        <GoogleLoginButton
          clientId={googleAPIKey}
          buttonText="Login with Google"
          onSuccess={handleResponse}
          onFailure={handleResponseFail}
        />
      </LoginContainer>
    </BaseLayout>
  );
}

export default Login;
