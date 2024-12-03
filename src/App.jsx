
import {Routes,Route} from 'react-router-dom'
import './App.css'
import Regform from './components/Regform'
import Login from './components/Login'
function App() {

  return (
    <>
    <Routes>
      <Route element={<Regform/>} path={'/'}>  </Route>
      <Route element={<Login/>} path={'/login'}>  </Route>

    </Routes>

    </>
  )
}

export default App
