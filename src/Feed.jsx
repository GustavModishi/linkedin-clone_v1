import React, { useState, useEffect } from 'react'
import CreateIcon from '@mui/icons-material/Create'
import InputOption from './InputOption'
import ImageIcon from '@mui/icons-material/Image';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import ArticleIcon from '@mui/icons-material/Article';
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase/compat/app';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';


function Feed() {
    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState('');

    const user = useSelector(selectUser)

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setPosts(
            snapshot.docs.map( (doc) => ({
                id: doc.id,
                data: doc.data()
            })))
        })

    }, [])

    const sendPost = (e)=> {
        e.preventDefault()

        db.collection('posts').add({
            name: user.displayName,
            description: 'this is a test post',
            message: input,
            photoUrl: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })

        

    }

  return (
    <div className='feed'>
        <div className="feed_inputContainer">
            <div className="input">
                <CreateIcon/>
                <form>
                    <input 
                    value={input}
                    onChange={(e)=>setInput(e.target.value)}
                    type="text"/>
                    <button onClick={sendPost} type="submit>">Send</button>
                </form>
            </div>
        </div>

        <div className="feed__inputOptions">
            <InputOption  Icon={ImageIcon} title='Photo' color='#70B5'/>
            <InputOption  Icon={SubscriptionsIcon} title='Video' color='#E7A33E'/>
            <InputOption  Icon={CalendarMonthIcon} title='Event' color='#C0CBCD'/>
            <InputOption  Icon={ArticleIcon} title='Article' color='#7FC15E'/>
        </div>

        <FlipMove>
        {posts.map(({id, data: { name, description,message ,photoUrl }})=>(
             <Post 
             key={id}
             name={name}
             description={description}
             message={message}
             photoUrl={photoUrl}
             />
        ))}
        </FlipMove>
      
    </div>
  )
}

export default Feed