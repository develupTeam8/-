import React from "react";
import BaseLayout from "../../components/Layout/BaseLayout";
import Name from "./Name";
import Won from "./Won";
import ImgButton from "./ImgButton";
import Tag from "./Tag";
import Form from "./Form";
import FormButton from "./FormButton";
import styled from "styled-components";

const Container = styled.div`
	margin: 50px 0;
	min-height: calc(100vh - 366px);
`;

function Forms() {
	return (
		<BaseLayout>
			<Container>
				<Name />
				<Won />
				<ImgButton />
				<Tag />
				<Form />
				<FormButton />
			</Container>
		</BaseLayout>
	);
}

export default Forms;
