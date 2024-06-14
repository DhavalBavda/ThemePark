import './Navbar.css'
// import { Link } from 'react-router-dom';

const Navbar = () => {
  
  return (
    <div className='nav'>
      <div className='nav-logo'>Amusement Park</div>
      <ul className='nav-menu'>
      <li>
          <button className='nav-button'>
            <span>Home</span>
          </button>
        </li>
        <li>
          <button className='nav-button'>
            <span>Service</span>
          </button>
        </li>
        <li>
          <button className='nav-button'>
            <span>About</span>
          </button>
        </li>
        <li >
          <button className='nav-button'>
            <span>Contact</span>
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Navbar