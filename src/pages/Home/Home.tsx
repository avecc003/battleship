import { useState } from "react";
import { useNavigate } from "react-router";
import JoinGameInput from "../../components/JoinGameInput/JoinGameInput";

const Home = () => {
    const [ isJoining, setIsJoining ] = useState(false);
    const navigate = useNavigate();

    const handleStartGame = () => {
        const gameId = crypto.randomUUID();
        navigate(`/game?gameId=${gameId}`);
    };
    
    const handleJoinGame = (e : React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const gameId = formData.get("gameId");
      if (typeof gameId === "string" && gameId.trim() !== "") {
        navigate(`/game?gameId=${gameId}`);
      }
    };

    const HOME_BUTTON_STYLE = "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600";
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <button className={HOME_BUTTON_STYLE}  onClick={handleStartGame}>
            Start Game
          </button>
          <div className="flex gap-4">
            <button className={HOME_BUTTON_STYLE + " mt-4"} onClick={() => setIsJoining(prev => !prev)}>
              Join Game
            </button>
            { isJoining && ( <JoinGameInput onSubmit={handleJoinGame} />)}
          </div>
        </div>
    );
}

export default Home;