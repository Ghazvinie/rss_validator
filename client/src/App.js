import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import FormPage from './components/FormPage';


function App() {
  const [data, setData] = useState(null);

  useEffect(() => {

    async function callApi() {
      const res = await fetch('/api');
      console.log(res);
      const data = await res.json();
      console.log(data)
      setData(data)
    };
      callApi();
  },[]);


  async function handleSubmit(e) {
      e.preventDefault();
      const res = await fetch('/api/test', {
        method: 'POST',
      })
  }

  return (
    <>
      <p>Hiya</p>
    </>
  );
}

export default App;
