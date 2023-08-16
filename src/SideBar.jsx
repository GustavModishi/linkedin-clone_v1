import React from 'react'
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';


function SideBar() {

    const user = useSelector(selectUser)
    const recentItem = (topic) => (
        <div className="recentItem">
        <span className="hash">#</span>
        <p>{topic}</p>

    </div>
    )
     
    
  return (
    <div className='sidebar'>
        <div className="sidebar__top">
            <img src={''} alt='' />
            <Avatar className='avatar'>{user.displayName[0] }</Avatar>
            <h2>{user.displayName }</h2>
            <h4>{user.email}</h4>

        </div>

        <div className="sidebar__stats">
            <div className="stat">
                <p>Who viewed you</p>
                <p className='statNumber'>2,543</p>
            </div>
            <div className="stat">
                <p>Views on post</p>
                <p className='statNumber'>2,543</p>   
            </div>
        </div>

        <div className="sidebar__bottom">
            <p>Recent</p>
    
            {recentItem('ReactJS')}
            {recentItem('Programming')} 
            {recentItem('NodeJS')} 
            {recentItem('SoftwareDevelopment')} 
            {recentItem('Developer')}  
            {recentItem('Design')} 
        </div>
    </div>
  )
}

export default SideBar