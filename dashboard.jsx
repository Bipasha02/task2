import React from 'react';
import './App.css';
import MonthlyCollectionChart from './components/MonthlyCollectionChart';
import data from './data.json';

function App() {
  return (
    <div className="App">
      <h1>CRM Dashboard</h1>
      <MonthlyCollectionChart data={data} />
      {/* we can add other components here */}
    </div>
  );
}

export default App;
