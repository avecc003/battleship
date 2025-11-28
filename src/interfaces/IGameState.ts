export default interface IGameState {
    // 0 = empty, 1 = ship, 2 = hit, 3 = miss
    playerBoard: number[][];
    opponentBoard: number[][];
    currentTurn: string;
    gameStatus: "waiting_for_opponent" | "in-progress" | "finished";
    winner?: string;
}