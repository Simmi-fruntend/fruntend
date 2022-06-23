import {BrowserRouter as Router,Routes,Route}from 'react-router-dom'
import './App.css';
import Navbar from './components/navbar';
// import Default from './components/defaultPage';
import Beneficiary from './components/Beneficiary';
import Medical from './components/Medical';
import Fund from './components/Fund';
import Documents from './components/Documents';
import Others from './components/Others';

function App() {

  return (
  <Router>
    <Navbar/>
    {/* <Default/> */}
    <Others/>
    <Routes>
    <Route exact path="/default-beneficiary"  element={<Beneficiary/>}/>
    <Route exact path="/default-medical"  element={<Medical/>}/>
    <Route exact path="/default-fund"  element={<Fund/>}/>
    <Route exact path="/default-documents"  element={<Documents/>}/>
    </Routes>
    </Router>
  );
}

export default App;
