import React from 'react'
import './styles.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';


import RouterComponent from './Router';

function App() {
  return (
    <div className="App">
      <Header/>
      <main className='container'>
      <RouterComponent/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
