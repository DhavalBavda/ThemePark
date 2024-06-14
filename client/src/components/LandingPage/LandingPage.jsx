import './LandingPage.css'
import th1 from '../../assets/images/th1.jpg'
import th2 from '../../assets/images/th2.jpg'
import th4 from '../../assets/images/th4.png'

const LandingPage = ({heroCount}) => {
  if(heroCount===0){
    return <img src={th1} className='background fade-in' alt="" />
  }
  else if(heroCount===1){
    return <img src={th2} className='background fade-in' alt="" />
  }
  else if(heroCount===2){
    return <img src={th4} className='background fade-in' alt="" />
  }
    
}

export default LandingPage

