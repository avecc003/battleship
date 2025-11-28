export default interface IMessage { 
    sender: string;
    x: number;
    y: number;
    type: "attack" | "result";
    result?: "hit" | "miss";
}
