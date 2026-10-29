import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './App.css'
// import Icard from './component/Icard'
// import IcardGallery from './component/IcardGallery'
// import StateHandling from './component/StateHandeling'
// import ImageManipulation from './component/ImageManipulation'
// import SampleUseEffect from './component/SampleUseEffect'
// import Shopping from './component/Shopping'
import Home from './component/home'
import Dashboard from './component/dashboard'
import Registration from './component/registration'
import Login from './component/login'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

function App() {
  const[rdata,setRData] = useState();

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/register" element={<Registration regData={setRData} />} ></Route>
        <Route path="/login" element={<Login />} ></Route>
        <Route path="/dashboard" element={<Dashboard />} ></Route>
      </Routes>
      </BrowserRouter>


      {JSON.stringify(rdata)}
    </div>
  )
}

export default App