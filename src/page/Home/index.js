import React from "react";
import ItemCardList from "./ItemCardList";
import BaseLayout from "../../components/Layout/BaseLayout";

function Home() {
  return (
    <div>
      <BaseLayout>
        <ItemCardList />
      </BaseLayout>
    </div>
  );
}

export default Home;
