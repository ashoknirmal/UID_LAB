import React from 'react';
import PropTypes from 'prop-types';
import '../App.css'; // Import your custom CSS

const UserProfile = (props) => {
  return (
    <div className="card mb-4 shadow-sm user-profile-card">
      <div className="card-body text-center">
        <img
          src={props.avatar}
          alt={`${props.name}'s avatar`}
          className="rounded-circle mb-3 animated-avatar"
          style={{ width: '150px', height: '150px', objectFit: 'cover' }}
        />
        <h3 className="card-title">{props.name}</h3>
        <p className="card-text text-muted">{props.email}</p>
        <p className="card-text">{props.location}</p>
        <p className="card-text">{props.bio}</p>
        <a href={`mailto:${props.email}`} className="btn btn-primary mt-3">
          Contact
        </a>
      </div>
    </div>
  );
};

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  location: PropTypes.string,
  bio: PropTypes.string,
  avatar: PropTypes.string,
};

export default UserProfile;
