import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { FaLinkedin } from "react-icons/fa";
import HeaderOption from './HeaderOption';
import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';
import { auth } from './firebase';
import LogoutIcon from '@mui/icons-material/Logout';

function Header() {

  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout)
    auth.signOut();
  } 
  

  return (
    <div className='header'>
      <div className="header__left">
        <FaLinkedin className='linkedin-icon'/>
        <div className="search">
           <SearchIcon/>  
           <input 
           placeholder='search' 
           type="text" 
           className="search-input" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title='Home' />
        <HeaderOption Icon={PeopleIcon} title='My Network' />
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
        <HeaderOption Icon={ChatIcon} title='Home' />
        <HeaderOption Icon={NotificationsNoneIcon} title='Notifications' />
        <HeaderOption 
         Icon={LogoutIcon}
         onClick={logoutOfApp}
         title='Logout'/>
      </div>
    </div>
  )
}

export default Header