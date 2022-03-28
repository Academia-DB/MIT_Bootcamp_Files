import './App.css';
import React from "react";
import {Route, Routes, HashRouter, Link} from "react-router-dom";

import {UserContext} from "./components/context.js";
import AllData from "./components/alldata.js";
import CreateAccount from "./components/createaccount.js";
import Deposit from "./components/deposit.js";
import Home from "./components/home.js";
import Withdraw from "./components/withdraw.js";
import bank from "./components/bank.png";

import NavBar from "./components/navbar.js"
import {FormCheck, Nav, Navbar} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import "./components/navbar.css";

// console.log(window.location.pathname);
// activeKey={"#"+window.location.pathname} add this to nav for some option to get url

function App() {
  let data = {users:
    [
      {
        name:'abel',email:'abel@mit.edu',password:'secret01',balance:100, login:false
      },
      {
        name:'derek',email:'derek@email.com',password:'passpass',balance:100, login:false
      }
    ]
  };
  return (
    <HashRouter>
      {/* <NavBar/> */}
      <Navbar bg="dark" variant="dark">
        {/* <LinkContainer to="/"> */}
          <Navbar.Brand>
            <img src={bank} width="30px" height="30px"/>
            {' '}
            BadBank
          </Navbar.Brand>
        {/* </LinkContainer> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/">
              <Nav.Link className="hovertext" data-hover="This is the main menu">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/createaccount">
              <Nav.Link className="hovertext" data-hover="Create a new account">Create Account</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/deposit">
              <Nav.Link className="hovertext" data-hover="Add money to your account">Deposit</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/withdraw">
              <Nav.Link className="hovertext" data-hover="Remove money from account">Withdraw</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/alldata">
              <Nav.Link className="hovertext" data-hover="Check registered data">All Data</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>        
      </Navbar>
      
      <UserContext.Provider value={data}>
        <div className="container" style={{padding: "20px"}}>
          <Routes>
            <Route exact path="/"         element={<Home/>}/>
            <Route path="/createaccount"  element={<CreateAccount/>}/>
            <Route path="/deposit"        element={<Deposit/>} />
            <Route path="/withdraw"       element={<Withdraw/>} />
            <Route path="/alldata"        element={<AllData/>} />
          </Routes>
        </div>
      </UserContext.Provider>      
    </HashRouter>
  );
}

export default App;
