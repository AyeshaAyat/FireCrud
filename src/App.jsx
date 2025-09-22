
import { Route, Routes } from 'react-router-dom'
import './App.css'
import RootLayout from './Components/layouts/RootLayout'
import Home from './Components/pages/Home'
import Error from './Components/pages/Error'

import LogIn from './Components/pages/LogIn'
import Signup from './Components/pages/Signup'
import ToDo from './Components/pages/ToDo'


function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<RootLayout/>}>
        <Route index element ={<Home/>}/>
        <Route path='/login' element ={<LogIn/>}/>
        <Route path='/signup' element ={<Signup/>}/>
        <Route path='/todo' element ={<ToDo/>}/>
        <Route path='/error' element ={<Error/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
