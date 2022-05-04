import "./sidebar.css"
import RssFeedIcon from '@mui/icons-material/RssFeed';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <RssFeedIcon className="sidebarIcon"/>
                    <span className="sidebarListItemText">Feed</span>
                </li>

                <li className="sidebarListItem">
                    <MarkUnreadChatAltIcon className="sidebarIcon"/>
                    <span className="sidebarListItemText">Chat</span>
                </li>

                <li className="sidebarListItem">
                    <VideoLibraryIcon className="sidebarIcon"/>
                    <span className="sidebarListItemText">Video</span>
                </li>

                <li className="sidebarListItem">
                    <PeopleAltIcon className="sidebarIcon"/>
                    <span className="sidebarListItemText">Groups</span>
                </li>

                <li className="sidebarListItem">
                    <BookmarksIcon className="sidebarIcon"/>
                    <span className="sidebarListItemText">Bookmarks</span>
                </li>

                <li className="sidebarListItem">
                    <HelpOutlineIcon className="sidebarIcon"/>
                    <span className="sidebarListItemText">Questions</span>
                </li>

                <li className="sidebarListItem">
                    <WorkIcon className="sidebarIcon"/>
                    <span className="sidebarListItemText">Jobs</span>
                </li>

                <li className="sidebarListItem">
                    <EventIcon className="sidebarIcon"/>
                    <span className="sidebarListItemText">Events</span>
                </li>

                <li className="sidebarListItem">
                    <SchoolIcon className="sidebarIcon"/>
                    <span className="sidebarListItemText">Courses</span>
                </li>
            </ul>
            <button className="sidebarButton">Show More</button>
            <hr className="sidebarHr"/>
            <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src="/assets/f1.jpeg" alt=""/>
                    <span className="sidebarFriendName">Aashvi Kothari</span>
                </li>

                <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src="/assets/f1.jpeg" alt=""/>
                    <span className="sidebarFriendName">Aashvi Kothari</span>
                </li>

                <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src="/assets/f1.jpeg" alt=""/>
                    <span className="sidebarFriendName">Aashvi Kothari</span>
                </li>

                <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src="/assets/f1.jpeg" alt=""/>
                    <span className="sidebarFriendName">Aashvi Kothari</span>
                </li>

                <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src="/assets/f1.jpeg" alt=""/>
                    <span className="sidebarFriendName">Aashvi Kothari</span>
                </li>

                <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src="/assets/f1.jpeg" alt=""/>
                    <span className="sidebarFriendName">Aashvi Kothari</span>
                </li>
            </ul>
        </div>
     </div>
  )
}
