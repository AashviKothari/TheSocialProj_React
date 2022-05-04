import "./topbar.css";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

export default function Topbar() {
  return (
    <>
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">RandomSocial</span>
      </div>
      <div className="topbarCenter">
      <div className="searchbar">
        <SearchIcon className="searchIcons"/>
        <input placeholder="Search" className="searchInput" />
      </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLiks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
            <div className="topbarIconItem">
                <PersonIcon />
                <span className="topbarIconBadge">1</span>
            </div>

            <div className="topbarIconItem">
                <MarkUnreadChatAltIcon />
                <span className="topbarIconBadge">1</span>
            </div>

            <div className="topbarIconItem">
                <NotificationsActiveIcon />
                <span className="topbarIconBadge">1</span>
            </div>
        </div>
        <img src="/assets/w.jpeg" alt="ok" className="topbarImg"/>
      </div>

      
    </div>
    </>
  )
}
