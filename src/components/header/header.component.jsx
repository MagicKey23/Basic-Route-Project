import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';

const Header = () =>{
return (
    <div class='header'>
         <div class="logo">
            <Link to='/'>HomePage</Link>
        </div>
       <div className="options">
           <Link className= 'option' to= 'menu'> Full Menu</Link>
       </div>
       
        
    </div>
)
    
}

export default Header;