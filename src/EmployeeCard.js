import React from 'react';

class EmployeeCard extends React.Component {
  render() {
    const { name, position, duration } = this.props;

    return (
      <div>
        <h2>{name}</h2>
        <p>Position: {position}</p>
        <p>Years Employeed: {duration}</p>
      </div>
    );
  }
}

export default EmployeeCard;
