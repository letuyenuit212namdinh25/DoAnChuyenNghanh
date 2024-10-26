import React from "react";
import SearchChat from "./SearchChat";
import AddChat from "./AddChat";
import styles from "./TabChat.module.css";
import ListChat from "./ListChat";
import Logout from "../Logout/Logout";
import { Link } from "react-router-dom";

const TabChat = () => {
  return (
    <div id={styles.TabChat}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link to={'/'} className="m-0 fs-25px text-decoration-none text-primary" style={{ fontWeight: "bold" }}>
          Đoạn chat
        </Link>
        <AddChat />
      </div>
      <SearchChat />
      <ListChat />
      {/* <Logout /> */}
    </div>
  );
};

export default TabChat;
