function Withdraw(){
  const [show, setShow]         = React.useState(true);
  const [name, setName]         = React.useState('');
  const [password, setPassword] = React.useState('');
  const [success, setSuccess]   = React.useState(false);
  const [balance, setBalance]   = React.useState(0);
  const [withdraw, setWithdraw] = React.useState('');
  const [history, setHistory]   = React.useState('');
  const ctx = React.useContext(UserContext);

  const verifyUser = () => {
    let correct;
    let newShow;
    let value;
    for(let elem in ctx.users) {
      if((ctx.users[elem].name == name || ctx.users[elem].email == name) && ctx.users[elem].password == password) {
        correct = true;
        newShow = true;
        value = ctx.users[elem].balance;
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
    setBalance(value);
  };
  
  function clearForm(){
    for(let elem in ctx.users) {
      if((ctx.users[elem].name == name || ctx.users[elem].email == name) && ctx.users[elem].password == password) {
        ctx.users[elem].balance = balance;
        break;
      }
    }

    setName('');
    setPassword('');
    setShow(true);
    setSuccess(false);
    setBalance(0);
    setWithdraw('');
    console.log(ctx);
  }

  const updateBalance = () => {
    console.log("Balance: "+balance);
    console.log("Withdraw: "+withdraw);
    let change = "";
    if(withdraw > 0 && withdraw <= balance) {
      let num = Number(balance) - Number(withdraw);
      setBalance(num);
      change = `Funds removed: ${withdraw}`;
      setWithdraw('');
      console.log("withdraw successful");
    }
    else {
      change = "Insufficient funds removed";
      console.log("withdraw failed");
    }
    console.log(change);
    setHistory(change, ...history);
  }

  console.log(balance);

  return (
    <Card
      bgcolor="primary"
      header="Withdraw"
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
            <h1>Amount to Withdraw</h1>
            <br/>
            <input 
              type="input" 
              className="form-control" 
              id="withdraw" placeholder="Enter Desired Amount" 
              value={withdraw}
              onChange={e => setWithdraw(e.currentTarget.value)} 
            /><br/>
            <button type="submit" className="btn btn-light" onClick={updateBalance}>Withdraw</button>
            <button type="submit" className="btn btn-light" onClick={clearForm}>Log Out</button>
            <br/>
            <br/>
            <h6>Recent Transaction:</h6> 
            <h6>{history}</h6>
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
