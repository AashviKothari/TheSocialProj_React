import "./rightbar.css"
import {Users} from "../../dummyData"
import Online from "../online/Online"

export default function Rightbar({profile}) {

  const HomeRightbar = ()=>{
    return(
      <>
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
      </>
    )
  }

  const ProfileRightBar = ()=>{
    return(
      <>
        <h4 className="rightbarTitle">User Information </h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">New York</span>
          </div>

          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">India</span>
          </div>

          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>

        <h4 className="rightbarTitle">User Friends </h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img className="righbarFollowingImg" src="/assets/person/1.jpeg"/>
            <span className="rightbarFollowingName">John cameolo</span>
          </div>

          <div className="rightbarFollowing">
            <img className="righbarFollowingImg" src="/assets/person/1.jpeg"/>
            <span className="rightbarFollowingName">John cameolo</span>
          </div>

          <div className="rightbarFollowing">
            <img className="righbarFollowingImg" src="/assets/person/1.jpeg"/>
            <span className="rightbarFollowingName">John cameolo</span>
          </div>

          <div className="rightbarFollowing">
            <img className="righbarFollowingImg" src="/assets/person/1.jpeg"/>
            <span className="rightbarFollowingName">John cameolo</span>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className="rightbar">
      <div className="rightbarwrapper">
        <ProfileRightBar/>
      </div>
    </div>
  )
}
