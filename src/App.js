
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import  'bootstrap/dist/css/bootstrap.min.css'
import  'bootstrap/dist/js/bootstrap.bundle.min'
import Navbar from './componant/Navbar';
import Single from './page/Single';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/Single'element={<Single/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
