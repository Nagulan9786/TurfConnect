import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Shop from './Shop';
import Product from './Product';
import Navbar from './Navbar';
import Contact from './Contact';
import Aboutus from './Aboutus';
import Booking from './Booking';
import TwoColumnLayout from './TwoColumnLayout';
import Signup from './Signup';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>} />
          <Route path='/Login' element={<Login/>} />
          <Route path='/Product' element={<Product/>} />
          <Route path='/Aboutus' element={<Aboutus/>} />
          <Route path='/Contact' element={<Contact/>} />
          <Route exact path='/TwoColumnLayout' element={<TwoColumnLayout/>} />
          <Route path='/Booking' element={<Booking/>} />
          <Route path='/Signup' element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
