import React, { useState } from "react";
import "./Home.css";
import Header from "../../componants/Header/Header";
import ExploreMenu from "../../componants/ExploreMenu/ExploreMenu";
function Home() {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
    </div>
  );
}

export default Home;
