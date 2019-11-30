import React from "react";
import ItemCardList from "./ItemCardList";
import TagContainer from "./TagContainer";
import HomeLayout from "../../components/Layout/HomeLayout";
import NavBar from "../../components/NavBar";
import HomeHeader from "./HomeHeader";

function Home() {
  return (
    <div>
      <NavBar />
      <HomeHeader />
      <TagContainer />
      <HomeLayout>
        <ItemCardList />
      </HomeLayout>
    </div>
  );
}

export default Home;
