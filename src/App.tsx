import './App.css'; // Import CSS file for styling
import teamsData from './CollegeBasketballTeams.json'; // Import JSON data
import React, { ReactNode } from 'react'; // Import React and ReactNode types

interface Team {
  school: string;
  name: string;
  city: string;
  state: string;
}

// TeamCard component to display information for each team
function TeamCard({ team }: { team: Team }) {
  const { school, name, city, state } = team;

  return (
    <div className="card">
      {' '}
      {/* Apply card class for styling */}
      <h2>{school}</h2>
      <p>{name}</p>
      <p>
        {city}, {state}
      </p>
    </div>
  );
}

// WelcomeHeader component to display welcome message
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

// CollegeList component to display a list of teams using TeamCard component
function CollegeList({ teams }: { teams: Team[] }) {
  return (
    <div>
      {teams.map((team, index) => (
        <TeamCard key={team.school} team={team} />
      ))}
    </div>
  );
}

// App component as the main entry point of the application
function App() {
  return (
    <div className="App">
      {' '}
      {/* Apply App class for styling */}
      <WelcomeHeader /> {/* Render WelcomeHeader component */}
      <CollegeList teams={teamsData.teams} />{' '}
      {/* Render CollegeList component with teams data */}
    </div>
  );
}

export default App; // Export App component as the default export
