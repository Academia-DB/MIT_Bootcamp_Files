function useInterval(callback, delay) {
  const { useEffect, useRef } = React;
  let savedCallback = useRef();
  useEffect(() => {
    savedCallback.current = callback;
    console.log("First useEffect called");
  }, [callback]);

  useEffect(() => {
    console.log("Second useEffect called");
    function tick() {
      savedCallback.current();
    }
    if (delay != null) {
      const id = setInterval(tick, delay);
      return () => {
        console.log("clear Interval");
        clearInterval(id);
      };
    }
  }, [callback, delay]);
}

const App = () => {
  const { useState } = React;

  let [state, setState] = useState([1, 2, 3, 4]);
  const [seconds, setSeconds] = useState(0);
  console.log("Rendering App amd Buttons");
  useInterval(() => {
    console.log("useInterval called");
    setSeconds(seconds + 1);
  }, 9000);

  const handler = index => {
    let newState = state.filter(item => item != index);
    console.log(newState);
    setState(newState);
  };
  let list = state.map((item, index) => {
    return (
      <MyButton onClick={() => handler(item)} index={seconds} key={index}>
        {seconds}
      </MyButton>
    );
  });
  return <div>{list}</div>;
};
const MyButton = ({ onClick, index }) => {
  let { Button } = ReactBootstrap;
  return <Button onClick={onClick}>{index}</Button>;
};

//---------------
ReactDOM.render(<App />, document.getElementById("root"));
