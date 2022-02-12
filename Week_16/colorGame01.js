const Square = ({ id, newState }) => {
  const [color, setColor] = React.useState("green");
  const [status, setStatus] = React.useState(null);
  const xo = ["O", "X"];

  const palet = ["blue", "red", "green"];
  const getRandomColor = () => palet[Math.floor(Math.random() * 3)];
  
  React.useEffect(() => {
    console.log(`Render ${id}`);
    return ()=> console.log(`unmounting Square ${id}`);
  })

  return (
    <button
      onClick={(e) => {
        let col = getRandomColor();
        setColor(col);
        let nextPlayer = newState({id:id, color:col});
        setStatus(nextPlayer);
        e.target.style.background = col;
      }}
    >
      <h1>{xo[status]}</h1>
    </button>
  );
};

const Board = () => {
  const [player, setPlayer] = React.useState(1);
  const [state, setState] = React.useState([]);
  let status = `Player ${player}`;

  const newState = (ob) => {
    let nextplayer = (player + 1) % 2;
    setPlayer(nextplayer);
    setState([...state, ob]);
    console.log(`adding state ${JSON.stringify(state)}`);
    status = `Player ${nextplayer}`;
    return nextplayer;
  };

  function renderSquare(i, color) {
    return <Square id={i} player={player} newState={newState}></Square>;
  }
  return (
    <div className="game-board">
      <div className="grid-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div id="info">
        <h1>{status}</h1>
      </div>
    </div>
  );
};

const Game = () => {
  return (
    <div className="game">
      <Board></Board>
    </div>
  );
};

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
