import React from 'react'
import LandingPage from './pages/LandingPage'
import NavLayout from './components/Layouts'
import Footer from './components/Footer'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import TentangKami from './pages/TentangKami'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import MarketPlace from './pages/MarketPlace'
import Keranjang from './pages/keranjang'
import DetailProductBahan from './pages/DetailProductBahan'
import Kontak from './pages/Kontak'
import ChatbotSidecol from './pages/ChatbotSidecol'
import Chatbot from './pages/Chatbot'
import { useLocation } from 'react-router-dom';
import { MenuPayment } from './pages/pembayaran'



const Main = () => {
  const location = useLocation();
  const showFooter = !['/SignIn', '/SignUp'].includes(location.pathname);

  return (
    <div> 
      


     {/* <BrowserRouter> */}
      <Routes>
        {/* Routes that use NavLayout */}
        <Route path="/LandingPage" element={<NavLayout><LandingPage /></NavLayout>} />
        <Route path="/TentangKami" element={<NavLayout><TentangKami /></NavLayout>} />
        
        <Route path="/Kontak" element={<NavLayout><Kontak /></NavLayout>} />
        
         {/* Routes without NavLayout and Footer */}
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/ChatbotSidecol" element={<ChatbotSidecol />} />
        <Route path="/Chatbot" element={<Chatbot />} />



        {/* Route that does not use NavLayout */}
        <Route path="/MarketPlace" element={<MarketPlace />} />
        <Route path="/Keranjang" element={<Keranjang />} />
        <Route path="/DetailProductBahan" element={<DetailProductBahan />} />
        <Route path="/pembayaran" element={<MenuPayment />} />
      </Routes>
      {showFooter && <Footer />}
    {/* </BrowserRouter> */}
        
      
        
     
    </div>
  )
}


const App = () => {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
};


export default App