import React from "react";
import {UserContext} from "./context.js";
import Card from "./context.js";

export default function Withdraw(){
  // const [show, setShow]         = React.useState(true);
  // const [name, setName]         = React.useState('');
  // const [password, setPassword] = React.useState('');
  // const [success, setSuccess]   = React.useState(false);
  const [user, setUser]         = React.useState(false);
  const [userVal, setUserVal]   = React.useState('');
  const [balance, setBalance]   = React.useState('');
  const [withdraw, setWithdraw] = React.useState('');
  // const [history, setHistory]   = React.useState('');
  const ctx = React.useContext(UserContext);

  // const verifyUser = () => {
  //   let correct;
  //   let newShow;
  //   let value;
  //   for(let elem in ctx.users) {
  //     if((ctx.users[elem].name == name || ctx.users[elem].email == name) && ctx.users[elem].password == password) {
  //       correct = true;
  //       newShow = true;
  //       value = ctx.users[elem].balance;
  //       //console.log("-------------");
  //       break;
  //     }
  //     else {
  //       correct = false;
  //       newShow = false;
  //     }
  //   }
  //   //console.log("**************" + correct + " " + success);
  //   setSuccess(correct);
  //   setShow(newShow);
  //   setBalance(value);
  // };
  
  // function clearForm(){
  //   for(let elem in ctx.users) {
  //     if((ctx.users[elem].name == name || ctx.users[elem].email == name) && ctx.users[elem].password == password) {
  //       ctx.users[elem].balance = balance;
  //       break;
  //     }
  //   }

  //   setName('');
  //   setPassword('');
  //   setShow(true);
  //   setSuccess(false);
  //   setBalance(0);
  //   setWithdraw('');
  //   //console.log(ctx);
  // }

  const check = () => { 
    let uv = '';
    for(let item in ctx.users) {
      if(ctx.users[item].login == true) {
        setUser(true);
        uv = item;
        setBalance(ctx.users[item].balance);
        break;
      }
    }
    return uv;
  }

  React.useEffect(() => {
    if(!userVal){
      setUser(false);
      setBalance('');
      setUserVal(check);
    }
    else{      
      ctx.users[userVal].balance = balance;
      UserContext.Provider = {ctx};
      //console.log(balance);
    }  
  });

  const updateBalance = () => {
    //console.log("Balance: "+balance);
    //console.log("Withdraw: "+withdraw);
    let change = "";
    if(Number(withdraw)) {
      if(withdraw > 0 && withdraw <= balance) {
        let num = Number(balance) - Number(withdraw);
        setBalance(num);
        change = `Funds removed: ${withdraw}`;
        setWithdraw('');
        //console.log("withdraw successful");

        if(ctx.users[userVal].login == true) {
          setUser(true);
          ctx.users[userVal].balance = balance;
          UserContext.Provider  = {ctx};
        }
      }
      else if(withdraw < 0) {
        change = "Must be a positive value to remove money";
      }
      else {
        change = "Insufficient funds removed";
        //console.log("withdraw failed");
      }
    }
    else {
      change = "Withdraw must be a number";
    }
    alert(change);
    setWithdraw('');
    //setHistory(change, ...history);
  }

  //console.log(balance);

  return (
    <Card
      bgcolor="danger"
      header="WITHDRAW"
      body={
        <>
          <div className="row1">
            <div className="col1">BALANCE</div>
            <div className="col2">{balance}</div>
          </div>
          <div className="row2">
            <div className="col3">WITHDRAW AMOUNT</div>
            <div className="col4">
              <input 
                type="input" 
                className="form-control" 
                id="withdraw" placeholder="0.00" 
                value={withdraw} 
                onChange={e => setWithdraw(e.currentTarget.value)} 
              />
            </div>
          </div>
          <div className="row">
            <div className="submit">
              <button type="submit" className="btn btn-light btn-lg mx-auto" disabled={!withdraw} onClick={updateBalance}>
                WITHDRAW
              </button>
            </div>
          </div>
        </>
        // show && !success ? ( 
        //   <>
        //     Name or Email<br/>
        //     <input 
        //       type="input" 
        //       className="form-control" 
        //       id="name" placeholder="Enter name / email" 
        //       value={name} 
        //       onChange={e => setName(e.currentTarget.value)} 
        //     /><br/>
        //     Password<br/>
        //     <input 
        //       type="password" 
        //       className="form-control" 
        //       id="password" 
        //       placeholder="Enter password" 
        //       value={password} 
        //       onChange={e => setPassword(e.currentTarget.value)}
        //     /><br/>
        //     <button type="submit" className="btn btn-light" onClick={verifyUser}>
        //       Login
        //     </button>
        //   </>
        // ) : show && success ? (
        //     <>
        //     <h1>Amount to Withdraw</h1>
        //     <br/>
        //     <input 
        //       type="input" 
        //       className="form-control" 
        //       id="withdraw" placeholder="Enter Desired Amount" 
        //       value={withdraw}
        //       onChange={e => setWithdraw(e.currentTarget.value)} 
        //     /><br/>
        //     <button type="submit" className="btn btn-light" onClick={updateBalance}>Withdraw</button>
        //     <button type="submit" className="btn btn-light" onClick={clearForm}>Log Out</button>
        //     <br/>
        //     <br/>
        //     <h6>Recent Transaction:</h6> 
        //     <h6>{history}</h6>
        //     </>
        // ) : (
        //     <>
        //     <h1>Failed</h1>
        //     <button type="submit" className="btn btn-light" onClick={clearForm}>Log In</button>
        //     </>
        // )
      }
    />
  )
}
