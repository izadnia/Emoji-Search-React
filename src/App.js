import React from 'react';
import Homepage from './components/homepage/Homepage';
import Layout from './layout/Layout';
import List from './components/list/List';
import './app.css'


import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={ <Layout page={<Homepage />} />} />
          <Route exact path='/list' element={ <Layout page={<List />} />} />
          
        </Routes>     
      </BrowserRouter>
    </div>
  );
}

export default App;
