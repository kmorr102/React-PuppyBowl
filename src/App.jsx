import { useState } from 'react'
import { fetchAllPlayers } from './API/index.js'
import './App.css'
import AllPlayers from './components/AllPlayers.jsx'
import SinglePlayer from './components/SinglePlayer.jsx'
import {Route,Routes} from "react-router-dom"
import {useNavigate} from 'react-router-dom'

function App() {

  return(
    <>
     <Routes>
      <Route path='/' element={<AllPlayers/>}/>
      <Route path='/:id' element={<SinglePlayer/>}/>
     </Routes>
    </>
  )
}

export default App
