import { Avatar } from '@mui/material'
import React, {forwardRef} from 'react'
import InputOption from './InputOption'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatIcon from '@mui/icons-material/Chat';
import SendIcon from '@mui/icons-material/Send';
import AutorenewIcon from '@mui/icons-material/Autorenew';


const Post = forwardRef( ( {name, description, message, photoUrl}, ref) => {


  return (
    <div ref={ref} className='post'>
        <div className="post_header">
        <Avatar className='avatar'>{name[0]}</Avatar>
            <div className="info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        <div className="post__body">
            <p>{message}</p>

        </div>
        <div className="post__buttons">
            <InputOption Icon={ThumbUpIcon} title='Like' />
            <InputOption Icon={ChatIcon} title='Comment' />
            <InputOption Icon={AutorenewIcon} title='Repost' />
            <InputOption Icon={SendIcon} title='Send' />
        </div>

    </div>
  )
})

export default Post