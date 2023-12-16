import './App.css'
import {Routes , Route} from 'react-router-dom'
import Home from './Components/Home'
import Add from './Components/Add'
import Update from './Components/Update'
function App() {


  return (
    <>
  
  <Routes>
       <Route path="/" element={<Home/>} ></Route>
       <Route path="/Add" element={<Add/>} ></Route>
       <Route path="/Update" element={<Update/>} ></Route>
    </Routes>
      
         
      
    </>
  )
}

export default App
