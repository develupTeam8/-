import React from "react";
import { GoogleLogin } from "react-google-login";
import { googleAPIKey } from "../../googleAPIKey/googleAPIKey";
import styled from "styled-components";

const GoogleLoginButton = styled(GoogleLogin)`
	width: 200px;
	height: 100px;
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
		<GoogleLoginButton
			clientId={googleAPIKey}
			buttonText="Google"
			onSuccess={handleResponse}
			onFailure={handleResponseFail}
		/>
	);
}

export default Login;
