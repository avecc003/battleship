import { useState } from "react";
import Board from "../../components/Board";
import IGameState from "../../interfaces/IGameState";
import useBattleShipGame from "../../hooks/useBattleshipGame";

const Game = () => {
    const [gameState, setGameState] = useState<IGameState | null>(null);
    const { ws, message, messageHistory, sendMessage } = useBattleShipGame();

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <h2> Your Board </h2>
          <Board />
          <h2> Opponent's Board </h2>
          <Board />
        </div>
    );
}

export default Game;