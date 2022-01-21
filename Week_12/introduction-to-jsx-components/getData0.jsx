const App = () => {
    const { useState } = React;
    let [state, setState] = useState([1,2,3,4])
    const handler = index => {
        let newState = state.filter(item => item != index);
        console.log(newState);
        setState(newState);
    }
    let list = state.map((item, index) => {
        return <MyButton onClick={() => handler(item)} key={index}></MyButton>;
    });
    return <div>{list}</div>;
};
const MyButton = ({onClick}) => {
    let { Button } = ReactBootstrap;
    return <Button onClick={onClick}>Click Me</Button>;
};


ReactDOM.render(<App />, document.getElementById("root"));