import React, { useState } from "react";

import styles from "./Contents.module.css";
import Box from "./UI/Box";
import UserInput from "./UserTable/UserInput";
import UserList from "./UserTable/UserList";
import Modal from "./UI/Modal";

const Contents = () => {
  const [userList, setUserList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalText, setModalText] = useState("");

  const addUserHandler = (user) => {
    setUserList((prevUserList) => {
      const updateUserList = [...prevUserList];
      updateUserList.unshift(user);
      return updateUserList;
    });
  };
  
  const isValidAge = (isValid, sentence) => {
    isValid ? setIsModalOpen(false) : setIsModalOpen(true);
    setModalText(sentence);
  };

  let userListContents = <UserList items={userList} />
  
  return (
    <div className={styles.contents}>
      <section>
        <Box>
          <UserInput addUser={addUserHandler} isValidAge={isValidAge}></UserInput>
        </Box>
      </section>
      <section>
        <Box>
          {userListContents}
        </Box>
      </section>
      {isModalOpen ? <Modal>{modalText}</Modal> : null}
    </div>
  );
};

export default Contents;
