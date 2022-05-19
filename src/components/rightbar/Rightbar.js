import "./rightbar.css"
import {Users} from "../../dummyData"
import Online from "../online/Online"

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarwrapper">
        <div className="birthdayContainer">
            <img className="birthdayImg" src="/assets/f1.jpeg"/>
            <span className="birthdayText"><b>Vianna Shah</b> and <b> 4 other</b> friends have their birthday today!</span>
        </div>
        <img className="rightbarAd" src="/assets/ad.png"/>
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(u=>(
            <Online key = {u.id} user={u}/>
          ))}
        </ul>
      </div>
    </div>
  )
}
