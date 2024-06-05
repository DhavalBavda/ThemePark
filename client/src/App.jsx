import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';  
//import '../public/style.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />  
    </Routes>
  );
}

export default App;
