import { useState } from 'react';
import './App.css';
// import Board from './components/Board';
// import Box from "./Box";
import "./components/Board.css";
import Box from './components/Box';


function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [xPlaying, setXPlaying] = useState(true)

  const winConditons = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]

  const handleClick = (boxIdx)=>{
    const updatedBoard = board.map((value,idx)=>{
      if(idx === boxIdx){
        console.log(idx);
        if(xPlaying){
          return "X"
        }
        else{
          return "O"
        }
      }
      else{
        return value
      }
    })

    checkWinner(updatedBoard)
    setXPlaying(!xPlaying)
    setBoard(updatedBoard)
  }

  const checkWinner = (board)=>{
    for(let i= 0; i < winConditons.length; i++){
      const [x,y,z] = winConditons[i]
      if(board[x] && board[x] === board[y] && board[y] === board[z]){
        console.log(board[x]);
        return board[x]
      }
    }
  }

  return (
    <div className='board'>
      {/* <Board board={board} handleClick={handleClick}/> */}
      {board.map((value, idx) => {
        return <Box value={value} idx={idx} handleClick={handleClick}/>;
      })}
    </div>
  );
}

export default App;
