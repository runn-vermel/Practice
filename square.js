const whosTheWinner = (arr) => {

  return arr[0]>arr[arr.length-1] ? 1 : 2;

}

console.log(whosTheWinner([2, 0, 0, 2]))

const isBoardValid = (board) => {
  return board.filter(num=> num<0).length ===0;
}

let playerOne = 0;
let playerTwo = 0;
const countWinner = (board) => {  
  const moves = [[-2, -2, 1, 0],
                 [-4, -4, 0 ,0],
                 [0, 0, -2, -2]
                ];
  for (let i=0;i<moves.length;i++) {
    let currentBoard = board.map((num,index)=>board[index]+moves[i][index]);
    
    console.log(currentBoard);
    
    if (!isBoardValid(board)) {
      if (whosTheWinner(board) ===1) {
        playerOne++;
      } else { 
        playerTwo++;
      }
    } else {
      countWinner(currentBoard);
    };
    
    

  }
  
  return `Player One: ${playerOne}, Player Two: ${playerTwo}`
  
}

console.log(countWinner([6, 4, 2, 4]));
/* 

The 2-player game of Drawdown is played with a board made up of N groups of stones. The stones at index 0 belong to player 1, the stones at index N - 1 belong to player 2, and the stones at indices [1..N-2] have no owner. At the start of each game a board and a list of k moves are provided. 
Each move is a list of N integers, which represent the number of stones the move adds/removes from the board at each index. All moves reduce the total number of stones on the board. Moves can be re-used, but a move can no longer be performed if doing so would reduce the number of stones in any group below 0.
After no more moves can be completed, the player with more of their own stones on the board is the winner.  In the case of a tie, player 2 wins.

Example: Let's say the game begins with a board of [6, 4, 2, 4] and these are the available moves provided:
1. [-2, -2, 1, 0]
2. [-4, -4, 0 ,0]
3. [0, 0, -2, -2]

Player One: 3, Player Two: 2

Initial board: [6, 4, 2, 4]
Player 1 decides to perform move 1. New board: [4, 2, 3, 4]
Player 2 can perform move 1 or move 3. They decide to perform move 1.  New board: [2, 0, 4, 4]
Player 1 performs move 3 (which is the only move available).  New board: [2, 0, 2, 2]
Player 2 is now forced to perform move 3. New board: [2, 0, 0, 0]
The game is now over and player 1 is the winner.

const whosTheWinner = ()
 */