import PropTypes from 'prop-types';
import defaultImage from '../default.jpg';

export default function User({ 
    username, 
    tag, 
    location, 
    avatar = defaultImage, 
    followers, 
    views, 
    likes, 
}) 
{
    return <div class="profile">
    <div class="description">
      <img
        src={avatar}
        alt="User avatar"
        class="avatar"
      />
      <p class="name">{username}</p>
      <p class="tag">{tag}</p>
      <p class="location">{location}</p>
    </div>
  
    <ul class="stats">
      <li>
        <span class="label">Followers</span>
        <span class="quantity">{followers}</span>
      </li>
      <li>
        <span class="label">Views</span>
        <span class="quantity">{views}</span>
      </li>
      <li>
        <span class="label">Likes</span>
        <span class="quantity">{likes}</span>
      </li>
    </ul>
  </div>
};

User.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string, 
    location: PropTypes.string, 
    avatar: PropTypes.string, 
    followers: PropTypes.number, 
    views: PropTypes.number, 
    likes: PropTypes.number, 
}