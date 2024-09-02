import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';
import { JokesGeneratorInput } from './components/JokesGeneratorInput/JokesGeneratorInput';
import { JokesCounter } from './components/JokesCounter/JokesCounter';
import { JokesList } from './components/JokesList/JokesList';

function App() {
  return (
    <div className="App">
      <div className="heading">
        <h1>
          Jokes App
        </h1>
      </div>

      <p>
        Looking for a laugh? This application is for you!
      </p>

      <JokesGeneratorInput />
      <JokesList />
      <JokesCounter />
    </div>
  );
}

export default App;
