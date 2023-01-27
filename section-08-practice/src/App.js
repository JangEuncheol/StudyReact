import React, {useState} from "react";
import './App.css';

import Box from "./components/UI/Box"
import UserInput from "./components/UserTable/UserInput"
import UserList from "./components/UserTable/UserList"


function App() {
  const [userList, setUserList] = useState([])

  const onAddUserList = (user) => {
    setUserList(prevUserList => {
      const updateUserList = [...prevUserList];
      // prevUserList.unshift(user)
      updateUserList.unshift(user)
      console.log(prevUserList)
      // return prevUserList
      return updateUserList
    });
  };

  let content = (<UserList items={userList} />);
  
  return (
    <div className="App">
      <div>
        <Box>
          <UserInput onAddUserList={onAddUserList}></UserInput>
        </Box>
      </div>
      <div>
        <Box>
          {content}
        </Box>
      </div>
    </div>
  );
}

export default App;
