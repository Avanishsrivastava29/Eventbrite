import logo from './logo.svg';
import './App.css';
import Header from "./components/headers/Header";
 import Home from "./components/home/Home";
 import Login from './components/headers/Login';
import {Box, Button} from '@mui/material';
import { useState } from "react";
 
 
import AddEventButton from './components/headers/AddEventbutton';
  
 

function App() {
  // state to control login form visibility
  const [showLoginForm, setShowLoginForm] = useState(false);

  // function to toggle login form visibility
  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <div>
      
       <Header/>
       <Box style={{marginTop:70}}>
       <Button color="inherit" onClick={toggleLoginForm}  class="login">
            Login
          </Button>
        {/* render login form if showLoginForm is true */}
      {showLoginForm && <Login />}
      <AddEventButton/>
        <Home/>
        
       </Box>
      
       
    </div>
  );
}

export default App;
