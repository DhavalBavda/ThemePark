// import React from 'react'
// import './LandingPage.css'
// import Navbar from '../Navbar/Navbar';
// import Home from '../Home/Home';
// import Footer from '../Footer/Footer';
// import Card from '../Card/Card';
// import Navbar1 from '../Navbar/Navbar';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import 'bootstrap/dist/js/bootstrap.bundle.min';

// const LandingPage = () => {
//   return (
//     <div>
//       <Navbar1/>
//       {/* <Home/>
//       <Card/>
//       <Footer/> */}
//     </div>

//   );
// };
// export default LandingPage


import React from 'react'
import Navbar1 from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Services from '../Services/Services'
import About from '../About/About'
import Contact from '../Contact/Contact'

const LandingPage = () => {
  return (
    <>
      <Navbar1 />
      <Hero />
      <About showNavbar={false}/>
      <Services showNavbar={false}/>
      <Contact showNavbar={false}/>
    </>
  )
}

export default LandingPage
