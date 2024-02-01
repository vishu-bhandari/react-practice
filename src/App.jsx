import React from 'react'
import {Routes, Route} from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Error from './Error'
import Navbar from './Navbar'

const App=()=> {
  const Name=()=>{
    return(
      <>
       <h1> hello , my name is vishu</h1>
      </>
    )
  }
  return (
    <>
    <Navbar/>
      <Routes>
        <Route exact path='/' element={<About/>} />
        <Route exact path='/contact' element={<Contact/>}/>
        <Route path='/contact/Name' element={<Name/>}/>
        <Route path='*' element={<Error/>} />
      </Routes>
    </>
  )
}

export default App