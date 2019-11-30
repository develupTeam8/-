import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import logo from "../../images/XMLID_312__2019-11-30/XMLID_312_.png";

const NavBarCotainer = styled.header`
	width: 100%;
	height: 66px;
	background-color: #fde827;
	opacity: 0.9;
`;
const NavBarItemContainer = styled.div`
	position: relative;
	width: 1050px;
	height: 100%;
	margin: 0 auto;
	display: flex;
	align-items: center;
`;
const LogoItem = styled.div`
	display: inline-block;
	width: 50px;
	height: 50px;
	border-radius: 50px;
	background-color: white;
	background-image: url(${props => props.logo});
	background-size: contain;
	box-sizing: content-box;
`;

const ALink = styled(Link)`
	display: flex;
	align-items: center;
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	-webkit-tap-highlight-color: transparent;
`;

const Tilte = styled.div`
	display: inline-block;
	margin-left: 14px;

	span {
		font-family: Lato, sans-serif;
		font-size: 20px;
		font-weight: bold;
		font-stretch: normal;
		font-style: normal;
		line-height: 1.39;
		letter-spacing: normal;
		color: #534d4d;
	}
`;

const LoginLogOut = styled.div`
	position: absolute;
	cursor: pointer;
	right: 0;
	span {
		font-family: Lato, sans-serif;
		font-size: 15px;
		font-weight: bold;
		font-stretch: normal;
		font-style: normal;
		line-height: 1.39;
		letter-spacing: normal;

		color: #534d4d;
	}
`;

const MyPageItem = styled.div`
	position: absolute;
	cursor: pointer;
	right: 65px;
	span {
		font-family: Lato, sans-serif;
		font-size: 15px;
		font-weight: bold;
		font-stretch: normal;
		font-style: normal;
		line-height: 1.39;
		letter-spacing: normal;

		color: #339af0;
	}
`;

function NavBar() {
	return (
		<NavBarCotainer>
			<NavBarItemContainer>
				<ALink to="/">
					<LogoItem logo={logo} />
					<Tilte>
						<span>중고양이</span>
					</Tilte>
				</ALink>
				<ALink to="/MyPage">
					<MyPageItem>
						<span>마이페이지</span>
					</MyPageItem>
				</ALink>
				<LoginLogOut>
					<span>로그아웃</span>
				</LoginLogOut>
			</NavBarItemContainer>
		</NavBarCotainer>
	);
}

export default NavBar;
