import {BrowserRouter as Router,Routes,Route}from 'react-router-dom'
import './App.css';
import Content from './components/content';
import Contact from './components/contact';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Map from './components/Map';
import Form from './components/form';
import Contactteam from './components/contact-team';
import Login from './components/login';
import Api from './components/api';
import Test from './components/test';

// import LoadingBar from 'react-top-loading-bar'
// import { Loader } from "@googlemaps/js-api-loader"
// import { Wrapper, Status } from "@googlemaps/react-wrapper";
function App() {

  return (
  <Router>
    <Navbar/>
    <Routes>
    <Route exact path="/content"  element={<Content/>}/>
    <Route exact path="/contact" element={<Contact/>}/>
    <Route exact path="/map" element={<Map/>}/>
    <Route exact path="/form" element={<Form/>}/>
    <Route exact path="/contact-team" element={<Contactteam/>}/>
    <Route exact path="/login" element={<Login/>}/>
    <Route exact path="/api" element={<Api/>}/>
    <Route exact path="/test" element={<Test/>}/>
    </Routes>
    </Router>
  );
}

export default App;
