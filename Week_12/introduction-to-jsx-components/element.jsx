const Hello = (props)=>{
    const name = props.name;
    return <h1> Hello {name} </h1>;
}

// const name = 'Mary';
// const element = <h1> Hello {name} </h1>;

//ReactDOM.render(element, document.getElementById('root'));
ReactDOM.render(<Hello name="Francis"/>, document.getElementById('root'));
