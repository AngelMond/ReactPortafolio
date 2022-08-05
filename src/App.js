import React from 'react'
import RouterComponent from './Router'
import './styles.css';

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
