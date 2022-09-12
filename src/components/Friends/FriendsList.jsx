import FriendListItem from '../FriendsListItem/FriendsListItem'; 
import css from '../Friends/Friends.module.css';
// import PropTypes from 'prop-types';


export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendlist}>
            {friends.map(friend =>
                    <li key={friend.id} className={css.item}>
                    <FriendListItem
                        
                        avatar={friend.avatar}
                        isOnline={friend.isOnline}
                        name={friend.name}
                    />
                    </li>
            )
            }
        </ul>
    )
};

export default FriendList