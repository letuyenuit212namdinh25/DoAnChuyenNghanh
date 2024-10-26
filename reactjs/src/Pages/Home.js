import React from "react";
import TabChat from "../Components/TabChat/TabChat";
import "../App.css";
import style from "./Page.module.css";
const Home = () => {
  return (
    <div id={style.TabChatHome}>
      <TabChat />
    </div>
  );
};

export default Home;
