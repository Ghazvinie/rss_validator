import React, { useEffect, useState } from 'react';
import './App.css';
import FormPage from './components/FormPage';

function App() {

  useEffect(() => {

    async function callApi() {
      const res = await fetch('/api');
      const data = await res.json();
    };
    callApi();
  }, []);

  return (
    <>
      <main>
        <h1>SpeechKit RSS Validator</h1>
        <h2>Check if your feed is valid:</h2>
        <p>
          (The feed requirements can be found <a href='https://docs.speechkit.io/docs/rss-feed'>here</a>. 
          On submitting an URL you will be alerted to any elements that are missing)
        </p>
        <FormPage />
      </main>
    </>
  );
}

export default App;
