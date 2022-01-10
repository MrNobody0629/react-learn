import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './Components/Home';
import CardContainer from './Components/CardContainer';
import AboutUs from './Components/AboutUs';
import Services from './Components/Services';
import LogIn from './Components/logimodal';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";


function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}>
          </Route>
        </Routes>
        <Routes>
          <Route path='/cards' element={<CardContainer/>}>
          </Route>
        </Routes>
        <Routes>
          <Route path='/aboutus' element={<AboutUs/>}>
          </Route>
        </Routes>
        <Routes>
          <Route path='/services' element={<Services/>}>
          </Route>
        </Routes>
        <LogIn></LogIn>
      </BrowserRouter>
    </>
  );
}

export default App;
