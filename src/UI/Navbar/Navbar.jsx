import React, {useContext} from 'react';
import {NavLink } from 'react-router-dom';
import { AuthContext } from '../../context';

const Navbar = () => {
  const {isAuth, setAuth} = useContext(AuthContext)
  const logout=()=>{
    setAuth(false);
    localStorage.removeItem('auth');
  }
  return (
    <div className='navbar'>
        <div className='navbar__links'>
            {
              isAuth 
              ? <><NavLink to='/posts'> News</NavLink>
                  <NavLink to='/about'> About</NavLink>
                  <NavLink to='*' onClick={logout}> LogOut</NavLink>
                </>

              :<NavLink to='/login'> LogIn</NavLink>
            }
            
        </div>
  </div>
  )
}

export default Navbar