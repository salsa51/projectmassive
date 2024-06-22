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
// import ChatbotSidecol from './pages/ChatbotSidecol'
// import Chatbot from './pages/Chatbot'
import { useLocation } from 'react-router-dom';



const Main = () => {
  const location = useLocation();
  const showFooter = !['/SignIn', '/SignUp'].includes(location.pathname);

  return (
    <div> 
      
      {/* <NavbarWeb
    buttonClassName="navbar-web-2"
    buttonClassNameOverride="navbar-web-2"
    className="navbar-web-instance"
    divClassName="design-component-instance-node"
    hasButton={false}
    logoipsum="2-2.svg"
  />
  <img className="whatsa-image" alt="Whatsapp image" src="WhatsApp_Image.png" />
  <div className="text-wrapper-11">Digital Foods</div>
  <img className="unsplash-jx" alt="Unsplash jx" src="unsplash_jX_07BO1jus.png" />
  <img className="img" alt="Vector" src="Vector-m.svg" />
  <p className="hi-parto">
    <span className="span">Hi,</span>
    <span className="text-wrapper-12"> Parto</span>
  </p> */}


     {/* <BrowserRouter> */}
      <Routes>
        {/* Routes that use NavLayout */}
        <Route path="/LandingPage" element={<NavLayout><LandingPage /></NavLayout>} />
        <Route path="/TentangKami" element={<NavLayout><TentangKami /></NavLayout>} />
        <Route path="/Keranjang" element={<NavLayout><Keranjang /></NavLayout>} />
        <Route path="/DetailProductBahan" element={<NavLayout><DetailProductBahan /></NavLayout>} />
        <Route path="/Kontak" element={<NavLayout><Kontak /></NavLayout>} />
        
         {/* Routes without NavLayout and Footer */}
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />


        {/* Route that does not use NavLayout */}
        <Route path="/MarketPlace" element={<MarketPlace />} />
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