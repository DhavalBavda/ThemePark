import React, { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';

const App = () => {
  let heroData = [
    { text1: "Welcome To", text2: "Theme Park" },
    { text1: "Enjoy the Rides", text2: "And Services" },
    { text1: "Be Safe", text2: "Be Kind" },
  ];

  const [heroCount, setHeroCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setHeroCount((count) => {
        return count === 2 ? 0 : count + 1;
      });
    }, 5000);
 

  // return () => {
  //   clearInterval(intervalId);
  // };
}, []);

  return (
<<<<<<< Updated upstream
    <div>
      <LandingPage heroCount={heroCount} />
      <Navbar />
      <Hero
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount} />
    </div>
=======
    <Routes>
      <Route path='/' element={<LandingPage />} />  
      <Route path='/Home' element={<HomePage/>}/>
      <Route path='/Services' element={<Services/>}/>
      <Route path='/About' element={<About/>}/>
    </Routes>
>>>>>>> Stashed changes
  );
};

export default App;
