import "./profile.css"
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'


export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
      <Topbar />
      <div className='profile'>
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className="profileCoverImg" src={`${PF}post/three.jpeg`} />
              <img className="profileUserImg" src={`${PF}person/7.jpeg`} />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Aashvi Kothari</h4>
              <span className="profileInfoDesc">It is a good day to be a good person!</span>
            </div>
          </div>
          <div className="profileRightBottom">

            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  )
}
