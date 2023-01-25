import './App.css';

import Box from "./components/UI/Box"
import UserInput from "./components/UserTable/UserInput"
import UserList from "./components/UserTable/UserList"


function App() {
  return (
    <div className="App">
      <Box>
        <UserInput></UserInput>
      </Box>
      <Box>
        <UserList></UserList>
      </Box>
    </div>
  );
}

export default App;
