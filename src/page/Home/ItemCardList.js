import React from "react";
import styled from "styled-components";
// import PropTypes from "prop-types";
import ItemCard from "./ItemCard";
import MoreItemCard from "./MoreItemCard";

const Wrapper = styled.div`
	width: 100%;
	padding: 80px 0 80px;
`;
const Title = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	span {
		font-size: 40px;
		font-weight: bold;
		font-stretch: normal;
		font-style: normal;
		line-height: 1.38;
		letter-spacing: normal;

		color: #534d4d;
	}
`;

const Container = styled.div`
	margin-top: 40px;
	width: 100%;
	display: grid;
	grid-template-rows: repeat(2, 240px);
	grid-template-columns: repeat(4, 240px);
	grid-gap: 30px;
`;

function ItemCardList({ items }) {
	return (
		<Wrapper>
			<Title>
				<span>최근 상품</span>
			</Title>
			<Container>
				<ItemCard />
				<ItemCard />
				<ItemCard />
				<ItemCard />
				<ItemCard />
				<ItemCard />
				<ItemCard />
				<MoreItemCard />
			</Container>
		</Wrapper>
	);
}

// ItemCardList.propTypes = {
//   items: PropTypes.array.isRequired
// };

export default ItemCardList;
