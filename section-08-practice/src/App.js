import React, { useState } from "react";
import "./App.css";

import Box from "./components/UI/Box";
import Modal from "./components/UI/Modal";
import UserInput from "./components/UserTable/UserInput";
import UserList from "./components/UserTable/UserList";

function App() {
  const [userList, setUserList] = useState([]);
  const [isValid, setIsValid] = useState(false);

  const onAddUserList = (user) => {
    if (!isValid) {return};

    setUserList((prevUserList) => {
      const updateUserList = [...prevUserList];

      // prevUserList.unshift(user)
      updateUserList.unshift(user);
      // console.log(prevUserList);
      // return prevUserList
      return updateUserList;
    });
  };


  let content = <UserList items={userList} />;

  return (
    <div className="App">
      <div className={`${styles.contents}${isValid ? "" : " invalid"}}`}>
        <div>
          <Box>
            <UserInput onAddUserList={onAddUserList}></UserInput>
          </Box>
        </div>
        <div>
          <Box>{content}</Box>
        </div>
      </div>
    </div>
  );
}

export default App;
