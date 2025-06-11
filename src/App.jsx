import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Contract from './pages/contract'


//components

function App() {
 return(
  <Router>
    <Routes>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/Contract' element={<Contract/>}/>
    </Routes>
  </Router>
 )
}

export default App
