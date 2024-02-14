const Square = ({id, player, state, newState}) => {
  //const [color, setColor] = React.useState('green');
  //const palet = ['red', 'blue', 'green'];
  const [status, setStatus] = React.useState(null);
  const XorO =["O", "X"];
  // const getRandomColor = ()=>{
  //   return palet[Math.floor(Math.random()*3)]
  //}

  // React.useEffect(()=>{
  //   console.log(`Rendering ${id}`);
  //   return ()=> console.log(`unmounting Square ${id}`);
  // })

  return(
    <button onClick = {(e) => {
      if(state != null){return;}

      let col = player ? 'red' : 'pink';
      //let col = getRandomColor();
      //setColor(col);
      let nextPlayer = newState(id);
      setStatus(nextPlayer);
      e.target.style.background = col;
    }}> 
      <h1>{XorO[status]}</h1>
      </button>
  )
}

const Board = () => {
  const [player, setPlayer] = React.useState(1);
  const [state, setState] = React.useState(Array(9).fill(null));

  let status = `Next Play: Player ${player ? 'X' : 'O'}`;
  let winner = checkWinner(state);
  if(winner != null){ status = `Player ${winner} wins`}

  const newState = (idOfSquare) => {
    let thePlayer = player;
    state[idOfSquare] = player; // present player
    setState(state); 
    let nextPlayer = (player + 1)%2;
    setPlayer(nextPlayer);
    return thePlayer; // present player
  }
  // const reRender = () => {
  //   setRandom(Math.random())};

  // function fromSquare(id){
  //   alert(id);
  // }

  //const toggle = () => setMounted(!mounted);

  function renderSquare(i){
    return <Square id={i} player={player} state = {state[i]} newState={newState}></Square>;
  }
  return (
    <div className="game-board">
      <div className ="grid-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className ="grid-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className ="grid-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <div id="info">
        <h1>{status}</h1>
      </div>
    </div>
  );
};

// ========================================

ReactDOM.render(<Board />, document.getElementById("root"));
