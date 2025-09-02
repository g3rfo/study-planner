import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Calendar from './Components/Calendar/Calendar'
import Subjects from './Components/Subjects/Subjects'

function App() {
  return (
    <BrowserRouter>
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path='/' element={<Calendar />} />
        <Route path='/subjects' element={<Subjects />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
