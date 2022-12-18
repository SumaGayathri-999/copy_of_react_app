import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header1 from './components/Header1';
import Header2 from './components/Header2';
import Footer from './components/Footer';
import Home from './components/Home/Home'
import CartPage from './components/CartPage';
import Announcement from './components/Announcement';
import DetailsPage from './components/DetailsPage';
import FilterPage from './components/FilterPage';
import LoginPage from './components/LoginPage';
import CreateAccount from './components/CreateAccount';

function App() {
  return (
   <BrowserRouter>
      <Announcement />
      <Header1 />
      <Header2 />
      <div>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<CartPage/>} />
          <Route path='/productdetails/:id' element={<DetailsPage/>} />
          <Route path='/filterpage' element={<FilterPage/>} />
          <Route path='/loginpage' element={<LoginPage />} />
          <Route path="/createAccount" element={<CreateAccount />} />
      </Routes>
      </div>
      
      <Footer/>
   </BrowserRouter>

  );
}

export default App;
