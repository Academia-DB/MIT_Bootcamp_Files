import React from "react";
import Card from "./context.js";
import {UserContext} from "./context.js";
import BankPhoto from "./bank.png"

export default function Home(){
  const [user, setUser]         = React.useState(false);
  const [userVal, setUserVal]   = React.useState('');
  const [name, setName]         = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);
  
  const check = () => { 
    let uv = '';
    for(let item in ctx.users) {
      //console.log(ctx.users[item]);
      //console.log("*************************");
      if(ctx.users[item].login == true) {
        setUser(true);
        uv = item;
        setName(ctx.users[item].name);
        setPassword(ctx.users[item].password);
        UserContext.Provider  = {ctx};
        //console.log(ctx.users[item]);
        //console.log("---------------------------")
        break;
      }
    }
    return uv;
  }

  React.useEffect(() => {
    setUserVal(check);
  });

  const verifyUser = () => {
    let checking = false;
    for(let elem in ctx.users) {  
      if((ctx.users[elem].name == name || ctx.users[elem].email == name) && ctx.users[elem].password == password) {
        ctx.users[elem].login = true;
        checking = true;
        setUser(true);
        setUserVal(elem);
        setName(ctx.users[elem].name);
        setPassword(ctx.users[elem].password);
        UserContext.Provider  = {ctx};
        ////console.log(ctx.users);
        break;
      }
    }
    if(!checking) {
      alert("There is no user with this information");
      setUser(false);
      setUserVal('');
      setName('');
      setPassword('');
    }
  };

  const logOut = () => {
    setUser(false);
    ctx.users[userVal].login = false;
    setUserVal('');
    setName('');
    setPassword('');
    UserContext.Provider  = {ctx};
    //console.log(ctx.users);
  }

  return (
    <Card
      txtcolor="black"
      title="WELCOME TO THE BANK"
      text="For all your banking needs"
      body={(
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <img src={BankPhoto} 
            className="img-fluid" 
            alt="Responsive image"/>
          </li>
          {user ? (
            <li className="list-group-item" >
              <a style={{fontSize: "1.25em", textDecoration: "underline"}}>Welcome {name}</a>
              <a style={{padding: "10px"}}></a>
              <button type="submit" className="btn btn-dark" onClick={logOut}>Logout</button>
            </li>
          ) : (
            <li className="list-group-item">
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
              <button type="submit" className="btn btn-dark" onClick={verifyUser}>
                Login
              </button>
            </li>
          )}
          
        </ul>
      )}
    /> 
  );  
}
