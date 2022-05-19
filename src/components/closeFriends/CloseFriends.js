import "./closeFriends.css"

export default function CloseFriends({user}) {
    return (
        <div>
            <li className="sidebarFriend">
                <img className="sidebarFriendImg" src={user.profilePicture} alt="" />
                <span className="sidebarFriendName">{user.username}</span>
            </li>
        </div>
    )
}
