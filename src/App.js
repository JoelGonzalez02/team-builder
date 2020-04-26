import React, { useState } from 'react';
import './App.css';
import TeamForm from './Components/Form';
import Team from './Components/Team';


function App() {
const [team, setTeam] = useState([
    {
      id: 0,
      name: 'Lebron James',
      email: 'theKing23@gmail.com',
      role: 'Point Guard/Small Forward',
    },
    {
      id: 1, 
      name: 'Anthony Davis',
      email: 'theBrow23@gmail.com',
      role: 'Power Forward/Center'
    }
  ]);

const addNewTeamMember = member => {
  const newMember = {
    id: Date.now(),
    name: member.name,
    email: member.email,
    role: member.role
  };
  setTeam([...team, newMember]);
}

  return (
    <div className="App">
 <h1 className='main-text'>Team Members</h1>
 <TeamForm addNewTeamMember={addNewTeamMember} />
 <Team team={team} />
    </div>
  );
}

export default App;
