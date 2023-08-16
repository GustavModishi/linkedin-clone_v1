import React from 'react'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Article({heading, subtitle}) {
  return (
    <div className="widgets_article">
        <div className="article_left">
            <FiberManualRecordIcon/>
        </div>
   
        <div className="widgets_article_right">
            <h4>{heading}</h4>
            <p>{subtitle}</p>
        </div>
    </div>    
  )
}

export default Article