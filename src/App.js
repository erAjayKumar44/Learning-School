
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 

import Navbar from './Components/Navbar';
import Home from './Components/Home'; 
import About from './Components/About';
import { renderToStaticMarkup } from 'react-dom/server';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" Component={Home}/>
          <Route path="/abouts" component={About}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
