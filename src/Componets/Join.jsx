import React, { useState } from 'react'
import './join.css'
import '../App.css'

import { Link } from 'react-router-dom'

function Join() {

  const [name, setName] = useState("")
  const [room, setRoom] = useState("")


  return (
    <div className='join'>
      <h1>Join Room</h1>
      <form action="/" className=''>
        <div className='name'>
          <label htmlFor="name">Enter your name</label>
          <input type="text" name="" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <br />
        <div className='roomname'>
          <label htmlFor="room">Enter Room name</label>
          <input type="text" name="" id="room" value={room} onChange={(e) => setRoom(e.target.value)} />
        </div>
      </form>

      <div className='btn'>
        <Link to={`/chat?name=${name}&room=${room}`}>
          <button type='submit' className="joinButton">Join room</button>
        </Link>
      </div>

    </div>
  )
}

export default Join
