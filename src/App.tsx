import './App.css';
import teamsData from './CollegeBasketballTeams.json';
import React, { ReactNode } from 'react';

interface Team {
  school: string;
  name: string;
  city: string;
  state: string;
}

function TeamCard({ team }: { team: Team }) {
  const { school, name, city, state } = team;

  return (
    <div className="card">
      <h2>{school}</h2>
      <p>{name}</p>
      <p>
        {city}, {state}
      </p>
    </div>
  );
}

function WelcomeHeader() {
  return (
    <div>
      <h1>Welcome to NCAA Teams List</h1>
      <p>
        This page details every college basketball team competing in March
        Madness!
      </p>
    </div>
  );
}

function CollegeList({ teams }: { teams: Team[] }) {
  return (
    <div>
      {teams.map((team, index) => (
        <TeamCard key={team.school} team={team} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <WelcomeHeader />
      <CollegeList teams={teamsData.teams} />
    </div>
  );
}

export default App;
