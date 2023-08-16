import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import Article from './Article';


function Widgets() {

  
  return (
    <div className='widgets'>
        <div className="widgets_header">
            <h2>LinkedIn News</h2>
            <InfoIcon />
        </div>

        <Article heading='article test' subtitle='top news - 548'/>
        <Article heading='Software Development' subtitle='top news - 88'/>

     
    </div>
  )
}

export default Widgets