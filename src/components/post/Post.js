import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Post() {
  return (
    <div className='post'>
      <div className='postWrapper'>
        <div className='postTop'>
            <div className='postTopLeft'>
                
                <span className='postUsername'>Aashvi Kothari</span>
                <span className='postDate'>5 mins ago</span>
                <img className='postProfileImg' src='/assets/ad.png'/>
            </div>
            <div className='postTopRight'>
                <MoreVertIcon />
            </div>
        </div>
        <div className='postCenter'></div>
        <div className='postBottom'></div>
     </div>
    </div>
  )
}
