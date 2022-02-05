const ATMDeposit = ({onChange, isDeposit, isValid, inputVal}) => {
    const choice = ["", "Deposit", "Cash Back"];
    const verify = !(isValid);
    return (
        <label className="label huge">
        <h3>{isDeposit}</h3>
        <input id="user" type="number" width="200" value={inputVal} onChange={onChange}></input>
        <input type="submit" width="200" value="Submit" disabled={verify}></input>
        </label>
    );
};

const Account = () => {
    let deposit = 0; // state of this transaction
    const [totalState, setTotalState] = React.useState(0);
    const [isDeposit, setIsDeposit] = React.useState("");
    const [isValid, setValid] = React.useState(false);
    const [inputVal, setInputVal] = React.useState('');
    const [history, setHistory] = React.useState([[
        `Change: 0`,
        `   Balance: 0`,
        "   Type: None"
    ]]);
    //var history = new Map([["total", "0"], ["type", "neither"], ["change", "0"]]);

    let status = `Account Balance $ ${totalState}`;
    //console.log('Account Rendered');

    const handleChange = () => {
        console.log(`handleChange ${event.target.value}`);
        deposit = Number(event.target.value);
        setInputVal(deposit);
        event.preventDefault();
    };  

    const handleSubmit = () => {
        let newTotal = totalState;
        setValid(false);
        let change = [];
        if(isDeposit == "Deposit") {
            newTotal = totalState + Number(inputVal);
            setValid(true);
            change = [[
                `Change: +${inputVal}`,
                `   Balance: ${newTotal}`,
                "   Type: Deposit"
            ]];
            //change = `Change: +${deposit}`, `Balance: ${newTotal}`, `Type: Deposit`;
        }
        else if (isDeposit == "Cash Back" && totalState >= Number(inputVal)) {
            newTotal = totalState - Number(inputVal);
            console.log(Number(inputVal));
            setValid(true);
            change = [[
                `Change: -${inputVal}`,
                `   Balance: ${newTotal}`,
                "   Type: Cash Back"
            ]];
            //change = `Change: -${deposit}`, `Balance: ${newTotal}`, `Type: Cash Back`;
        }
        else {
            setValid(false);
            alert("Insufficient Funds");
            event.preventDefault();
            return;
        }
        setTotalState (newTotal);
        if(inputVal >= 1) {
            //console.log("***********");
            setHistory([change, ...history]);
            setInputVal("");
            setIsDeposit("");
            setValid(false);
        }
        event.preventDefault();
        console.log(history);
        
    }; 

    return (
        <form onSubmit={handleSubmit}>
            <h2 id='total'>{status}</h2>
            <button onClick={()=>setIsDeposit("Deposit")}>Deposit</button>
            <button onClick={()=>setIsDeposit("Cash Back")}>Cash Back</button>
            <br/><br/>
            <ATMDeposit onChange={handleChange} isDeposit={isDeposit} isValid={isValid} inputVal={inputVal}> Deposit</ATMDeposit>
            <br/><br/>
            <h2 id='transaction'>Transactions</h2>
            <ul>
                {history.map((e) => (
                    <li key={e}>{e}</li>
                ))}
            </ul>
        </form>
        );
};
// ========================================
ReactDOM.render(<Account />, document.getElementById("root"));