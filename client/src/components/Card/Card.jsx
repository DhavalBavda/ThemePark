// import './Hero.css'
// import next from '../../assets/images/next.png'

// const Hero = ({heroData,setHeroCount,heroCount}) => {
//   return (
//     <div className='hero'>
//       <div className="hero-text">
//         <p>{heroData.text1}</p>
//         <p>{heroData.text2}</p>
//       </div>
//       <div className="hero-explore">
//         <p>Explore the Park</p>
//         <img src={next} alt="" />
//       </div>
//       <div className="hero-dot-play">
//         <ul className="hero-dots">
//           <li onClick={()=>setHeroCount(0)} className={heroCount===0?"hero-dot-orange":"hero-dot"}></li>
//           <li onClick={()=>setHeroCount(1)}className={heroCount===1?"hero-dot-orange":"hero-dot"}></li>
//           <li onClick={()=>setHeroCount(2)}className={heroCount===2?"hero-dot-orange":"hero-dot"}></li>
//         </ul>
//       </div>
//     </div>

//   )
// }

// export default Hero
import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Card = () => {
  return (
    <div>Card</div>
  )
}

export default Card
