import React from 'react'
import PropTypes from 'prop-types';
import defaultImage from './default.jpg';
import { ProfileContainer,
  DescriptionContainer,
  ProfileImg,
  ProfileName,
  ProfileInfo,
  StatsList,
  StatsItem,
  ItemLabel,
  ItemQuantity,
} from './Profile.styled';

export default function User({ 
    username, 
    tag, 
    location, 
    avatar = defaultImage,
    stats,
}) 
{
  return (
  <ProfileContainer>
    <DescriptionContainer>
      <ProfileImg
        src={avatar}
        alt="User avatar"
      />
      <ProfileName>{username}</ProfileName>
      <ProfileInfo>@{tag}</ProfileInfo>
      <ProfileInfo>{location}</ProfileInfo>
    </DescriptionContainer>
  
    <StatsList>
      <StatsItem>
        <ItemLabel>Followers</ItemLabel>
        <ItemQuantity>{stats.followers}</ItemQuantity>
      </StatsItem>
      <StatsItem>
        <ItemLabel>Views</ItemLabel>
        <ItemQuantity>{stats.views}</ItemQuantity>
      </StatsItem>
      <StatsItem>
        <ItemLabel>Likes</ItemLabel>
        <ItemQuantity>{stats.likes}</ItemQuantity>
      </StatsItem>
    </StatsList>
  </ProfileContainer>
  )
};

User.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired, 
  location: PropTypes.string.isRequired, 
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired, 
      likes: PropTypes.number.isRequired, 
    })
  ),
}