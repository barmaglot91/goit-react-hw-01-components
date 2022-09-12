import css from '../FriendsListItem/FriendsListItem.module.css';
import PropTypes from 'prop-types';

const FriendListItem = ({ isOnline, avatar, name }) => {
    return (
        <>
            <span className={isOnline ? css.online : css.offline}></span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </>
    )
};

FriendListItem.propTypes = {
             avatar: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            name: PropTypes.string.isRequired,
}

export default FriendListItem