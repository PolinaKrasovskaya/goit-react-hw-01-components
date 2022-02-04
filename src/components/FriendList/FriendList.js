import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import { Friends } from './FriendList.styled';

export default function FriendList ({friends}) {
    return (
    <Friends>
        {friends.map(({ id, avatar, name, isOnline }) => (
            <FriendListItem
            key={id}
            name={name}
            avatar={avatar}
            isOnline={isOnline}
            />
        ))}
    </Friends>
    )
}

FriendList.propTypes = {
    friends: PropTypes.array,
};
