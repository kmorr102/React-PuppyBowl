import { useState } from 'react';
import { fetchAllPlayers } from './API/index';
import './App.css';
import AllPlayers from './components/AllPlayers';
import SinglePlayer from './components/SinglePlayer';
import {Route, Routes,Link} from "react-router-dom";
import NewPlayerForm from './components/NewPlayerForm';

function App() {

  return(
    <>
    <div id='container'>
      <div id='navbar'>
        <Link to={"/"}>Home</Link>
        <Link to={"/NewPlayerForm"}>New Player Form</Link>
      </div>
      
     <Routes>
      <Route path='/' element={<AllPlayers/>}/>
      {/* <Route path='/:id' element={<SinglePlayer/>}/> changed path to: */}
      <Route path='/SinglePlayer/:id'element={<SinglePlayer/>}/> 
      <Route path='/NewPlayerForm'element={<NewPlayerForm/>}/>
     </Routes>
     </div>
    </>
  )
}

export default App