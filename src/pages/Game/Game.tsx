import { useState } from "react";
import Board from "../../components/Board";
import IGameState from "../../interfaces/IGameState";
import useBattleShipGame from "../../hooks/useBattleshipGame";
import { BOARD_SIZE } from "../../components/Board/utils.BoardTile";

const Game = () => {
    const roomId = new URLSearchParams(window.location.search).get("gameId");
    const userId = crypto.randomUUID();
    const emptyBoard = Array(BOARD_SIZE).fill(null).map(() => Array(BOARD_SIZE).fill(0));

    const [gameState, setGameState] = useState<IGameState | null>(
      {
        playerBoard: emptyBoard,
        opponentBoard: emptyBoard,
        currentTurn: null,
        gameStatus: "waiting_for_opponent"
      }
    );

    const { ws, message, messageHistory, sendMessage } = useBattleShipGame(roomId);
    
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 gap-10">
          <div> 
            <h2> Your Board </h2>
            <Board boardState={gameState?.playerBoard} />
          </div>
          <div>
            <h2> Opponent's Board </h2>
            <Board boardState={gameState?.opponentBoard} />
          </div>
        </div>
    );
}

export default Game;