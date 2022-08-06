import React from 'react'
import './styles.css';
//Import router
import RouterComponent from './Router';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
      <div className="App">
        <Header />
        <main className='container'>
          <RouterComponent/>
        </main>
        <Footer />
      </div>
  );
}

export default App;
