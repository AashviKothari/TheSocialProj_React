import "./rightbar.css"

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
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="/assets/f1.jpeg"/>
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Aayaan Kothari</span>
          </li>

          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="/assets/f1.jpeg"/>
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Aayaan Kothari</span>
          </li>

          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="/assets/f1.jpeg"/>
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Aayaan Kothari</span>
          </li>

          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="/assets/f1.jpeg"/>
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Aayaan Kothari</span>
          </li>

          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="/assets/f1.jpeg"/>
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Aayaan Kothari</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
