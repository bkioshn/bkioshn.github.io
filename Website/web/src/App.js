import React, { Component } from 'react';
import Header from './Component/Header';
import Content from './Component/Content';
import BottomContent from './Component/BottomContent';
import Project from './Component/Project';
import Footer from './Component/Footer';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <BottomContent />
        <br />
        <Project />
        <Footer />
      </div>
    );
  }
}

export default App;
