import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';
import Button from '../button/button.component'
const Header = () =>{
return (
    <div class='header'>
         <div class="logo">
            <Link to='/'> <Button>Home</Button></Link>
        </div>

       <div className="options">
           <Link className= 'option' to= 'menu'> <Button>Menu</Button></Link>
           <Link className= 'option' to= 'menu'> <Button>About Us</Button></Link>
           <Link className= 'option' to= 'menu'> <Button>Contact</Button></Link>
       </div>
       
        
    </div>
)
    
}

export default Header;