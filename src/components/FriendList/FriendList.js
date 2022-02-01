import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

export default function FriendList ({friends}) {
    return <ul class="friend-list">
        {friends.map(({ id, avatar, name, isOnline }) => (
            <FriendListItem
            key={id}
            name={name}
            avatar={avatar}
            isOnline={isOnline}
            />
        ))}
    </ul>
}

FriendList.propTypes = {
    friends: PropTypes.array,
};
  