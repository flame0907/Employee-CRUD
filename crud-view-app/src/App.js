
import './App.css';
import AddEmploee from './components/AddEmploee';
import Employee from './components/Employee';
import Navbar from './components/Navbar';
import UpdateEmployee from './components/UpdateEmployee';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route index element={<Employee/>} />
      <Route path="/" element={<Employee/>} />
       
   
      <Route path="/addEmploee" element={<AddEmploee/>} />
      <Route path="/editEmployee/:id" element={<UpdateEmployee/>} />
      </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
