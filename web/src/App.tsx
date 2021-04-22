import React from 'react';
import './App.css';
import IPAddress from "./components/IPAddress";
import PlaidLink from "./components/plaid/PlaidLink";

function App() {
  return (
    <div className="App">
      <IPAddress/>
        <PlaidLink/>
    </div>
  );
}

export default App;
