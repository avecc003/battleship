export default interface IGameState {
    // 0 = empty, 1 = ship, 2 = hit, 3 = miss
    playerBoard: number[][];
    opponentBoard: number[][];
    currentTurn: string | null;
    gameStatus: "waiting_for_opponent" | "set-up" | "in-progress" | "finished";
    winner?: string;
}