import {BrowserRouter as Router,Routes,Route}from 'react-router-dom'
import './App.css';
import Navbar from './components/navbar';
import Default from './components/defaultPage';
import Beneficiary from './components/Beneficiary';
import Medical from './components/Medical';
import Fund from './components/Fund';
import Documents from './components/Documents';
// import Others from './components/Others';
import Others1 from './components/Others1';
import Others2 from './components/Others2';
import Others3 from './components/Others3';
// import Others4 from './components/others4';

function App() {

  return (
  <Router>
    <Navbar/>
    <Default/>
    {/* <Others/> */}
    <Routes>
    <Route exact path="/default-beneficiary"  element={<Beneficiary/>}/>
    <Route exact path="/default-medical"  element={<Medical/>}/>
    <Route exact path="/default-fund"  element={<Fund/>}/>
    <Route exact path="/default-documents"  element={<Documents/>}/>
    <Route exact path="/others-fundraiser"  element={<Others1/>}/>
    <Route exact path="/others-beneficiary"  element={<Others2/>}/>
    <Route exact path="/others-congratulations"  element={<Others3/>}/>
    {/* <Route exact path="/others"  element={<Others4/>}/> */}
    </Routes>
    </Router>
  );
}

export default App;
