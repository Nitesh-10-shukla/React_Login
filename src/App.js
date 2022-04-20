import { BrowserRouter, Route, Routes } from "react-router-dom";


import Home from './components/Home'
import Registration from './components/Registration'
import Login from './components/Login'
function App() {
  return (
    <div>
   
    {/* <Registration/>
    <br></br>
    <Login/>  */}
    <BrowserRouter>
    <Home/>
        <Routes>
        <Route  path="/Registration" element={<Registration/>}></Route>
        <Route  path="/Login" element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
