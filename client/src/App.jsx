import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';  
import HomePage from './pages/HomePage/HomePage';
import Services from './pages/Services/Services';
import About from './pages/About/About';
function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />  
      <Route path='Home' element={<HomePage/>}/>
      <Route path='Services' element={<Services/>}/>
      <Route path='About' element={<About/>}/>
    </Routes>
  );
}

export default App;
