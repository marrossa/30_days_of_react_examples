import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Clock from './components/Clock';
import Container from './components/Container';
import './font_awesome/css/font-awesome.css';
import { activities } from './data';
import Panel from './components/Panel';

class App extends Component {
  render() {
    return (
      <div className="notificationsFrame">
        {/*
        <div className="clock">
          <Clock />
        </div>
        <div className="panel">
          <Header title="Timeline" />
          <Content activities={ activities }/>
        </div>
        <Container />
        */}
        <Panel />
      </div>
    );
  }
}

export default App;
