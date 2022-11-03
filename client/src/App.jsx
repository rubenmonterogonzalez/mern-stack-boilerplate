import React, { useState, useEffect } from 'react'

const App = () => {
  const [message, setmessage] = useState("")
  const getData = async () => {
    const res = await fetch('http://localhost:5000/profile');
    const data = await res.json();
    setmessage(data.message);
  }

  useEffect(() => {
    getData();
  }, [])


  return (
    <div className="App">
      <p>Our message is {message}</p>
    </div>
  );
}

export default App