import './style/style.scss';
import {Routes, Route } from "react-router-dom" ;
import Welcome from './Pages/Welcome/Welcome';
import Connect  from './Pages/Connect/Connect';
import Header from './Component/Header/Header';
function App() {

  return (
    <div className='app'>
      <Header />
      <Routes>
            <Route path="/" element={ <Connect/>} />
            <Route path="/welcome/:id" element={<Welcome/>} />
      </Routes>

    </div>
  )
}

export default App
