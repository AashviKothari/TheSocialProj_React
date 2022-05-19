import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from "../../dummyData";
import { useState } from 'react';

export default function Post({post}) {
  
  const [like,setLike] = useState(post.like)
  const [isLiked, setIsLiked] = useState(false)

  const likeHandler = ()=>{
    setLike(isLiked? like-1 : like+1)
    setIsLiked(!isLiked)
  }
  const user = Users.filter(u=>u.id===1)

  console.log(user[0].username)
  return (
    <div className='post'>
      <div className='postWrapper'>
        <div className='postTop'>
            <div className='postTopLeft'>
                <img className='postProfileImg' src={Users.filter((u)=>u.id ===post.userId)[0].profilePicture}/>
                <span className='postUsername'>{Users.filter((u)=>u.id ===post.userId)[0].username}</span>
                <span className='postDate'>{post.date}</span>
            </div>
            <div className='postTopRight'>
                <MoreVertIcon />
            </div>
        </div>
        <div className='postCenter'></div>
            <span className='postText'>{post?.desc}</span>
            <br></br>
            <img className='postImg' src={post.photo}/>
        <div className='postBottom'>
        <div className='postBottomLeft'>
            <img className='likeIcon' src='/assets/like.png ' onClick={likeHandler}/>
            <img className='likeIcon' src='/assets/heart.png' onClick={likeHandler}/>
            <span className='postLikeCounter'>{like} people like it!</span>
        </div>
        <div className='postBottomRight'>
            <span>{post.comment} Comments</span>
        </div>
        </div>
     </div>
    </div>
  )
}
