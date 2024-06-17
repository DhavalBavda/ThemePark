import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary','btn--outline'];
const SIZES = ['btn--medium', 'bt-large'];
const Button = ({children, type, onClick, ButtonStyle}) => {
    const checkButtonStyle = STYLES.includes(ButtonStyle)? buttonStyle : STYLES[0];

    const checkButtonSizes = SIZES.includes(buttonSize)?buttonSize : SIZES[0]

    return(
        <Link to='/Sign-Up' className='btn-mobile'>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
                {children}</button> 
        </Link>
        
    )
}

export default Button