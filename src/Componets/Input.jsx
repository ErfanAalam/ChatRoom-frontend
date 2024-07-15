import React from 'react'
import './input.css'

function Input({ message, setMessage, sendMessage }) {
  return (
    <div>
      <form className="form">
        <input
          className="input"
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="sendButton" onClick={(e) => sendMessage(e)}>Send</button>
      </form>
    </div>
  )
}

export default Input
