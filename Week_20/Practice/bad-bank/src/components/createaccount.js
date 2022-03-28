import React from "react";
import {UserContext} from "./context.js";
import Card from "./context.js";

export default function CreateAccount(){
  const [user, setUser]         = React.useState(false);
  const [userVal, setUserVal]   = React.useState('');
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);  

  function validate(field, label){
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }

  function handleCreate(){
    console.log(name,email,password);
    if (!validate(name,     'name'))     return;
    if (!validate(email,    'email'))    return;
    if (!validate(password, 'password')) return;

    for(let item in ctx.users) {
      if(ctx.users[item].login == true) {
        ctx.users[item].login = false;
        UserContext.Provider  = {ctx};
        break;
      }
    }

    ctx.users.push({name,email,password,balance:0,login:true});
    UserContext.Provider  = {ctx};
    alert("Successfully Created Account");
    clearForm();
    setShow(false);
  }    

  function clearForm(){
    setUser(false);
    setUserVal('');
    setName('');
    setEmail('');
    setPassword('');
  }

  //console.log(ctx.users);

  return (
    <Card
      bgcolor="primary"
      header="CREATE ACCOUNT"
      status={status}
      body={
        show ? (  
              <>
              NAME<br/>
              <input 
                type="input" 
                className="form-control" 
                id="name" 
                placeholder="ENTER NAME" 
                value={name} 
                onChange={e => setName(e.currentTarget.value)} />
              <br/>
              EMAIL<br/>
              <input 
                type="email" 
                className="form-control" 
                id="email" 
                placeholder="ENTER EMAIL" 
                value={email} 
                pattern="[a-zA-Z0-9-]+@[a-zA-Z0-9-]+([.]{1}[a-zA-Z0-9-])"
                required
                onChange={e => setEmail(e.currentTarget.value)}/>
              <br/>
              PASSWORD<br/>
              <input 
                type="password" 
                className="form-control" 
                id="password" 
                placeholder="ENTER PASSWORD" 
                value={password} 
                onChange={e => setPassword(e.currentTarget.value)}/>
                <br/>
              <button 
                type="submit" 
                className="btn btn-light" 
                disabled={!name || !email || !password} 
                onClick={handleCreate}>CREATE ACCOUNT</button>
              </>
            ):(
              <>
              NAME<br/>
              <input 
                type="input" 
                className="form-control" 
                id="name" 
                placeholder="ENTER NAME" 
                value={name} 
                onChange={e => setName(e.currentTarget.value)} />
              <br/>
              EMAIL<br/>
              <input 
                type="email" 
                className="form-control" 
                id="email" 
                placeholder="ENTER EMAIL" 
                value={email} 
                onChange={e => setEmail(e.currentTarget.value)}/>
              <br/>
              PASSWORD<br/>
              <input 
                type="password" 
                className="form-control" 
                id="password" 
                placeholder="ENTER PASSWORD" 
                value={password} 
                onChange={e => setPassword(e.currentTarget.value)}/>
              <br/>
              <button type="submit" className="btn btn-light" disabled={!name || !email || !password} onClick={handleCreate}>ADD ANOTHER ACCOUNT</button>
              </>
            )}
    />
  )
}