const Square = ({id, player}) => {
  return (
    <button onClick={() => {alert(`I'm square ${id}`)}}> 
      <h1>{player}</h1> 
    </button>
  )
}

const Board = () => {
  const [player, setPlayer] = React.useState(1);
  const [mounted, setMounted] = React.useState(true);
  const [random, setRandom] = React.useState(0);
  let status = `Player ${player}`;
  const toggle = () => setMounted(!mounted);
  const reRender = () => setRandom(Math.random());

  function renderSquare(i) {
    return <Square id={i} player={player}></Square>
  }
  return (
    <div 
      className="game-board">
      <div className="grid-row">
        {mounted && renderSquare(0)}
        {mounted && renderSquare(1)}
        {mounted && renderSquare(2)}
      </div>
      <div id="info">
        <button onClick={toggle}>Show/Hide Row</button>
        <button onClick={reRender}>Re-Render</button>
        <h1>{status}</h1>
      </div>
    </div>
  );
};

// ========================================

ReactDOM.render(<Board />, document.getElementById("root"));
