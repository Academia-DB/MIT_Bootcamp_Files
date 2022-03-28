import React from "react";
import {UserContext} from "./context.js";
import Card from "./context.js";

export default function Login(){
  const [show, setShow]         = React.useState(true);
  const [name, setName]         = React.useState('');
  const [password, setPassword] = React.useState('');
  const [success, setSuccess]   = React.useState(false);
  const ctx = React.useContext(UserContext);  

  const verifyUser = () => {
    let correct;
    let newShow;
    for(let elem in ctx.users) {
      if((ctx.users[elem].name == name || ctx.users[elem].email == name) && ctx.users[elem].password == password) {
        correct = true;
        newShow = true;
        ctx.users[elem].login = true;
        console.log("-------------");
        break;
      }
      else {
        correct = false;
        newShow = false;
      }
    }
    console.log("**************" + correct + " " + success);
    setSuccess(correct);
    setShow(newShow);
  };

  function clearForm(){
    setName('');
    setPassword('');
    setShow(true);
    setSuccess(false);
  }

  console.log("show: "+show);
  console.log("success: "+success);

  return (
    <Card
      bgcolor="primary"
      header="Login"
      body={
        show && !success ? ( 
          <>
            Name or Email<br/>
            <input 
              type="input" 
              className="form-control" 
              id="name" placeholder="Enter name / email" 
              value={name} 
              onChange={e => setName(e.currentTarget.value)} 
            /><br/>
            Password<br/>
            <input 
              type="password" 
              className="form-control" 
              id="password" 
              placeholder="Enter password" 
              value={password} 
              onChange={e => setPassword(e.currentTarget.value)}
            /><br/>
            <button type="submit" className="btn btn-light" onClick={verifyUser}>
              Login
            </button>
          </>
        ) : show && success ? (
            <>
            <h1>Login Successful</h1>
            <h2>Welcome {name}</h2>
            <button type="submit" className="btn btn-light" onClick={clearForm}>Log Out</button>
            </>
        ) : (
            <>
            <h1>Failed</h1>
            <button type="submit" className="btn btn-light" onClick={clearForm}>Log In</button>
            </>
        )
      }
    />
  )  
}
