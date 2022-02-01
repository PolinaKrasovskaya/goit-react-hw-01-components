import PropTypes from 'prop-types';


export default function FriendListItem ({ id, avatar, name, isOnline }) {
    return <li class="item" key={id}>
            <span class="status">{isOnline}</span>
            <img class="avatar" src={avatar} alt="User avatar" width="48" />
            <p class="name">{name}</p>
        </li>
}

// FriendListItem.propTypes = {
//     id: PropTypes.number.isRequired,
//     avatar: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     isOnline: PropTypes.bool.isRequired,
// }