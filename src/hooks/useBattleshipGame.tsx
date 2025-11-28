import { useState, useEffect } from 'react';
import IMessage from '../interfaces/IMessage';


const BattleshipGameStart = (roomId: string | null) => {
  const [ ws, setWs ] = useState<WebSocket | null>(null);
  const [ message, setMessages ] = useState<IMessage>({} as IMessage);
  const [ messageHistory, setMessageHistory ] = useState<IMessage[]>([]);

  useEffect(() => {
      const socket = new WebSocket(process.env.BATTLESHIP_WS_URL || 'ws://localhost:8080');

      socket.onopen = () => console.log("Connected to WebSocket server");

      socket.onmessage = (event) => {
        setMessages(prev => event.data as IMessage);
      };

      setWs(socket);

      return () => {
          socket.close();
      };
  }, []);

  useEffect(() => {
      if (message && Object.keys(message).length > 0) {
          setMessageHistory(prevHistory => [...prevHistory, message]);
      }
  }, [message]);

  const sendMessage = (msg: IMessage) => {
      if (ws && ws.readyState === WebSocket.OPEN) {
          ws.send(JSON.stringify(msg));
      }
  };

  return { ws, message, messageHistory, sendMessage };
};

export default BattleshipGameStart;