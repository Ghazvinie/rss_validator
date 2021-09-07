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
    <FormPage />
    </main>
    </>
  );
}

export default App;
