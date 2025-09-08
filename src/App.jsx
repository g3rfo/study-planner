import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Calendar from './Components/Calendar/Calendar'
import Subjects from './Components/Subjects/Subjects'

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col items-center from-white to-white bg-gradient-to-b dark:from-[#1a2332] dark:to-[#040609] bg-no-repeat w-100% min-h-screen h-fit">
        <header className="w-full">
          <Navbar />
        </header>
        <main className="flex justify-center">
          <Routes>
            <Route path='/' element={<Calendar />} />
            <Route path='/subjects' element={<Subjects />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
