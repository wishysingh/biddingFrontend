import React from 'react';
import {Link} from 'react-router-dom';
import './NavbarLogin.css';

 const NavbarLogin = () => {
  return (
    <div class='firstpage'>
        <div class='navbar'>
          <Link to="/signin" class='insym navsym'>Sign in</Link>
        
          <Link to="/signup" class='upsym navsym'>Sign up</Link>
        </div>
   </div>
  );
}
  export default NavbarLogin;