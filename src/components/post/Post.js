import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Post() {
  return (
    <div className='post'>
      <div className='postWrapper'>
        <div className='postTop'>
            <div className='postTopLeft'>
                <img className='postProfileImg' src='/assets/w.jpeg'/>
                <span className='postUsername'>Aashvi Kothari</span>
                <span className='postDate'>5 mins ago</span>
            </div>
            <div className='postTopRight'>
                <MoreVertIcon />
            </div>
        </div>
        <div className='postCenter'></div>
            <span className='postText'>Hey! its fp</span>
            <br></br>
            <img className='postImg' src='/assets/ad.png'/>
        <div className='postBottom'>
        <div className='postBottomLeft'>
            <img className='likeIcon' src='/assets/like.png'/>
            <img className='likeIcon' src='/assets/heart.png'/>
            <span className='postLikeCounter'>32 people liked it!</span>
        </div>
        <div className='postBottomRight'>
            <span>8 Comments</span>
        </div>
        </div>
     </div>
    </div>
  )
}
