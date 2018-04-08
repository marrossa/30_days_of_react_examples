import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import './font_awesome/css/font-awesome.css';

class App extends Component {
  render() {
    return (
      <div className="notificationsFrame">
        <div className="panel">
          <Header />
          <Content />
        </div>
      </div>
    );
  }
}

export default App;
