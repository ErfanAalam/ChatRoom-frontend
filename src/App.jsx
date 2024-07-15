import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Join from './Componets/Join'
import Chat from './Componets/Chat'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Join />} />
          <Route path='/chat' element={<Chat />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
