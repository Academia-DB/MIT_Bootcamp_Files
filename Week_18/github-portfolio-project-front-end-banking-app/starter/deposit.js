function Deposit(){
  const [show, setShow]         = React.useState(true);
  const [name, setName]         = React.useState('');
  const [password, setPassword] = React.useState('');
  const [success, setSuccess]   = React.useState(false);
  const [balance, setBalance]   = React.useState(0);
  const [deposit, setDeposit]   = React.useState('');
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
    setDeposit('');
    console.log(ctx);
  }

  const updateBalance = () => {
    console.log("Balance: "+balance);
    console.log("Deposit: "+deposit);
    let change = "";
    if(deposit > 0) {
      let num = Number(deposit) + Number(balance);
      setBalance(num);
      change = `Funds added: ${deposit}`;
      setDeposit('');
      console.log("deposit successful");
    }
    else {
      change = "Insufficient funds added";
      console.log("deposit failed");
    }
    console.log(change);
    setHistory(change, ...history);
  }

  console.log(balance);

  return (
    <Card
      bgcolor="primary"
      header="Deposit"
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
            <h1>Amount to Deposit</h1>
            <br/>
            <input 
              type="input" 
              className="form-control" 
              id="deposit" placeholder="Enter Desired Amount" 
              value={deposit}
              onChange={e => setDeposit(e.currentTarget.value)} 
            /><br/>
            <button type="submit" className="btn btn-light" onClick={updateBalance}>Deposit</button>
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
