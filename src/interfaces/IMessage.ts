export default interface IMessage { 
    roomId: string;
    senderId: string;
    x: number;
    y: number;
    type: "attack" | "result";
    result?: "hit" | "miss";
}
