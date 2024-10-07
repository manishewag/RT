/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './Component/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import All from "./Component/All"
import FullStackDevelopment from "./Component/FullStackDevelopment"
import DataScience from "./Component/DataScience"
import CyberSecurity from './Component/CyberSecurity'
import Career from './Component/Career'

function App() {
  return<>

    <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route path='/' element={<All/>}/>
        <Route path='/all' element={<All/>}/>
        <Route path='/FullStackDevelopment' element={<FullStackDevelopment/>}/>
        <Route path='/DataScience' element={<DataScience/>}/>
        <Route path='/CyberSecurity' element={<CyberSecurity/>}/>
        <Route path='/Career' element={<Career/>}/>
       </Routes>     
    </BrowserRouter> 
    </>
}
export default App