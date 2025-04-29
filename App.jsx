import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'
import Projects from './componet/customer/Projects'
import Certificate from './componet/customer/Certificate'
import About from './componet/customer/About'
import Contact from './componet/customer/Contact'
import { Route, Routes } from 'react-router'
import Resume from './componet/customer/Resume'
import Education from './componet/customer/Education'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
     <Route path='/' element={< Home/>}/>
     <Route path='About' element={< About/>}/>
     <Route path='Projects' element={< Projects/>}/>
     <Route path='Certificate' element={< Certificate/>}/>
     <Route path='Contact' element={< Contact/>}/>
     <Route path='Resume' element={< Resume/>}/>
     <Route path='Education' element={< Education/>}/>

   
     </Routes>
    </>
  )
}

export default App
