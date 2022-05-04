import './share.css'
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

export default function Share() {
  return (
    <div className='share'>
      <div className='shareWrapper'>
        <div className='shareTop'>
        
            <img className='shareProfileImg' src='/assets/f1.jpeg'/>
            <input placeholder="What's in your Mind" className='shareInput'/>
        </div>
        <hr className='shareHr'/>
        <div className='ShareBottom'>
            <div className='shareOptions'>
                <div className='shareOption'>
                <PermMediaIcon htmlColor='tomato' className='shareIcon' />
                    <span className='shareOptionText'>Photo or video</span>
                    
                </div>

                <div className='shareOption'>
                <LabelIcon htmlColor='blue' className='shareIcon' />
                    <span className='shareOptionText'>Tags</span>
                    
                </div>

                <div className='shareOption'>
                <LocationOnIcon htmlColor='green' className='shareIcon' />
                    <span className='shareOptionText'>Locations</span>
                    
                </div>

                <div className='shareOption'>
                <EmojiEmotionsIcon htmlColor='goldenrod' className='shareIcon' />
                    <span className='shareOptionText'>Feelings</span>
                    
                </div>
                <button className='shareButton'>Share</button>
            </div>
            
        </div>
      </div>
    </div>
  )
}
