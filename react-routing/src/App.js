
import './App.css';
import React from 'react';
import {Routes,Route} from 'react-router-dom'
import Shubham from './shubham';
import { Link } from "react-router-dom";


function App() {
  return (
    <div>
    <h1>SHUBHAM</h1>
    <Link to="/shubham">shubham</Link>
   <Routes>
  
    <Route path= '/shubham' element={<Shubham></Shubham>}></Route>
    {/* <Route path= '/contact' element={<h1>7770006483</h1>}></Route>
    <Route path= '/address' element={<h1>sifoishf</h1>}></Route>
    <Route path= '/grpMember' element={<h1>x,y,z</h1>}></Route> */}
   </Routes>
   </div>

  );
}

export default App;
