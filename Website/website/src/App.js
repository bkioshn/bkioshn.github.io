import React, { Component } from 'react';
import './App.css';
import Header from './Component/Header';
import Content from './Component/Content';
import BottomContent from './Component/BottomContent';
import Footer from './Component/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <BottomContent />
        <Footer />
      </div>
    );
  }
}

export default App;
