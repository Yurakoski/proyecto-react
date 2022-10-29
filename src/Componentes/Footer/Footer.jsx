import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ()=>{
    return (
            <footer>
                <div className="footer-container">
                    <Link to='/'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfE3rPRizjUuY9KrKpVebumKmckT7BESJx8g&usqp=CAU" alt="imagen logo"></img></Link>
                    <div>electro+</div>
                </div>
            </footer>
    )
}

export default Footer;