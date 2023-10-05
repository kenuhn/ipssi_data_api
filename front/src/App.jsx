import './style/style.scss';
import {Routes, Route, Form } from "react-router-dom" ;
import Welcome from './Pages/Welcome/Welcome';
import Connect  from './Pages/Connect/Connect';
import Header from './Component/Header/Header';
import Compte from './Component/Compte/Compte';
import Analyse from './Pages/Analyse/Analyse';
import {contextConnection} from './utils/context';
import {createContext, useContext, useState, useEffect} from 'react';
import {useNavigate } from 'react-router-dom'; 
function App() {

   const [data, setData] = useState(false)

   
   useEffect(() => {
    const user = JSON.parse(localStorage.getItem("data"))

    if (user) {
      setData(user)
    } 
    
   }, [])
  
  return (
    <div className='app'>
     <contextConnection.Provider value={data}>
        <Header />
        <Routes>
              <Route path="/" element={ <Connect/>} />
              <Route path="/welcome/:id" element={<Welcome/>} />
              <Route path="/compte" element={<Compte/>} />
              <Route path="/analyse" element={<Analyse/>} />
        </Routes>
        </contextConnection.Provider >
      

    </div>
  )
}

export default App
