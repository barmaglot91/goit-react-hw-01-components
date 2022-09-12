import PropTypes from "prop-types";
import css from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <css.frienditem className="item">
      <css.friendstatus status={isOnline} className="status"></css.friendstatus>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <css.friendname className="name">{name}</css.friendname>
    </css.frienditem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendListItem;