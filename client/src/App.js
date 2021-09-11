import React, { useEffect, useState } from 'react';
import './App.css';
import FormPage from './components/FormPage';

function App() {
  return (
    <>
      <main>
        <h1>SpeechKit RSS Validator</h1>
        <p>
          The feed requirements can be found <a href='https://docs.speechkit.io/docs/rss-feed'>here</a>. 
          On submitting an URL you will be alerted to any elements that are missing.
        </p>
        <h2>Check if your feed is valid:</h2>
        <FormPage />
      </main>
    </>
  );
}

export default App;
