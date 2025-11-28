export default interface IMessage { 
    roomId: string;
    x: number;
    y: number;
    type: "attack" | "result";
    result?: "hit" | "miss";
}
