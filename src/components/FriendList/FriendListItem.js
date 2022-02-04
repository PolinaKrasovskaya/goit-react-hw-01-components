import PropTypes from "prop-types";
import { FriendItem,
    FriendStatus,
    FriendAvatar,
    FriendName,
} from "./FriendList.styled";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <FriendItem>
      <FriendStatus isOnline={isOnline}></FriendStatus>
      <FriendAvatar src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}