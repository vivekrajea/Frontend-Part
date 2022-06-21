import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

//import DatasComponent from './components/DatasComponent';
import CompData from './components/CompData';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
// import CreateDataComponent from './components/CreateDataComponent';
import { AddDataComponent } from './components/AddDataComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route exact path='/'  element={<CompData/>} />
            <Route path="/data" element={<CompData />}></Route>
            <Route path='/add-data' element={<AddDataComponent/>} />
            <Route path='/edit-employee/:id' element={<AddDataComponent/>} />
          </Routes>

        </div>
        <FooterComponent />
      </Router>
    </div>

  );
}

export default App;
