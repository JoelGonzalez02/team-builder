import React from 'react';

const Team = props => {
    return (
        <div className='team-list'>
            {props.team.map(member => (
                <div className='member' key={member.id}>
                    <h2> {member.name}</h2>
                    <p> Email: {member.email}</p>
                    <p> Role: {member.role}</p>
                </div>
            ))}
        </div>
    );
};

export default Team;