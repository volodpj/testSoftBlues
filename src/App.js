import React from 'react';
import './reset.css';
import './App.css';
import logo from './img/Logo.png';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <header className="header">
          <img src={logo}/>
          <nav className="header__navigation">
            <a href="#">О компании</a>
            <a href="#">Услуги</a>
            <a href="#">Отзывы</a>
            <a href="#">Контакти</a>
          </nav>
        </header>
        <main className="mainContent">
          <section className="mainContent__head">
    
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
