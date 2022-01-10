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
      <Navbar/>
      <Home/>
      <CardContainer/>
      <AboutUs/>
      <Services/>
      <LogIn/>
    </>
  );
}

export default App;
