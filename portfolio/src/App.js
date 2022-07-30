import React from 'react'
import './styles.css';
import Header from './components/header/Header';


import Router from './Router';

function App() {
  return (
    <div className="App">
      <Header/>
      <main className='container'>
      <Router/>

      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
