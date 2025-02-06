import React from 'react';
import PropTypes from 'prop-types';

function UserCard(props) {
  return (
    <div>
      <h1>User Card: {props.name}</h1>
      <p>Age: {props.age}</p>
      <p>Course: {props.course} </p>
    </div>
  );
}

// Use PropTypes to enforce the expected types for the props
UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  course: PropTypes.string.isRequired,
};

export default UserCard;