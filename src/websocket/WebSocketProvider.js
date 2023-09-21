// WebSocketProvider.js
import React, { useEffect, useRef } from 'react';
import socketIOClient from "socket.io-client";
import WebSocketContext from './WebSocketContext';

const ENDPOINT = "ws://localhost:2500"; // replace with your server address

const WebSocketProvider = ({ children }) => {
  const socket = useRef(null);

  useEffect(() => {
    socket.current = socketIOClient(ENDPOINT);

    return () => {
      socket.current.disconnect();
    };
  }, []);

  return (
    <WebSocketContext.Provider value={socket.current}>
      {children}
    </WebSocketContext.Provider>
  );
};

export default WebSocketProvider;
