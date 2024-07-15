import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import queryString from 'query-string';
import Infobar from './Infobar';
import Input from './Input';
import { useLocation } from 'react-router-dom';
import Messages from './Messages/Messages';
import '../chat.css'

const socket = io.connect("http://localhost:5000");

function Chat() {
  const location = useLocation();
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const messageRef = useRef(null)

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    setName(name);
    setRoom(room);

    socket.emit('join', { name, room }, (error) => {
      if (error) alert(error);
    });

    return () => {
      socket.emit('disconnected');
      socket.off();
    };
  }, [location.search]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    socket.on('roomData', ({ users }) => {
      setUsers(users);
    });

    return () => {
      socket.off('message');
      socket.off('roomData');
    };

  }, []);

  useEffect(() => {
    messageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      socket.emit('sendMessage', message, () => {
        setMessage('');
      });
    }
  };
  

  return (
    <>
        <h1>Chat Room</h1>
      <div className='chat'>
        <Infobar room={room} />
        <Messages messages={messages} name={name} />
        <div ref={messageRef} />
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>

    </>

  );
}

export default Chat;
