import React from 'react';
// import logo from '../logo.svg';
import '../styles/TopNavBar.css';
import '../styles/Main.css'
import '../styles/TableDetail.css'
import TopNavBar from "./TopNavBar"
import Main from "./Main"

function App() {
  return (
      <div className="App">
          <TopNavBar/>
          <Main/>
      </div>
  );
}

export default App;
