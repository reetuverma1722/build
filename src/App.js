import {  Route,Routes, } from 'react-router-dom';
import Forget from './Pages/Forget';
import './App.css';
import Login from './Pages/Login';

function App() {
  return (
    

     
<Routes>
  <Route path="/" element={<Login/>}/>
  <Route path="/forget" element={<Forget/>}/>
</Routes>


       
      
    
  );
}

export default App;
