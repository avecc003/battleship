import {useContext, createContext, use} from "react";
import useBattleshipGame from "../../hooks/useBattleshipGame";
import { create } from "domain";

type contextType = {
    ws: WebSocket | null;
    message: any;
    messageHistory: any[];
    sendMessage: (msg: any) => void;
};

export const GameContext = createContext<contextType>({
    ws: null,
    message: {},
    messageHistory: [],
    sendMessage: () => {}
});

type GameProviderProps = {
    roomId?: string | null;
    children: React.ReactNode;
};

const gameContext = createContext<contextType | undefined>(undefined);

const useGameContext = () => {
    const context = useContext(gameContext);
    if (!context) {
        throw new Error("useGameContext must be used within a GameProvider");
    } 
    return context;
};

export const GameProvider = ({ children, roomId }: GameProviderProps) => {
    const battleShipGame = useBattleshipGame(roomId || null);

    return (
        <GameContext.Provider value={{
          ...battleShipGame
        }}>
            {children}
        </GameContext.Provider>
    );
};