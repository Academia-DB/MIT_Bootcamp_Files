const Hello = props => {
    let color = props.action();
    return <h1 style={{ backgroundColor: color }}> Hello {props.name} </h1>
};
const getRandomColor = () => {
    const palet = ["red", "blue", "green"];
    let color = path[Math.floor(Math.random() * 3)];
    console.log(color);
    return color;
}

ReactDOM.render(
    <Hello action={getRandomColor} name="Lisa" />,
    document.getElementById("root")
);