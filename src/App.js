import React, { Component } from 'react';
import TopMenu from './components/menu-top';
import Content from './components/content';
import Header from './components/header';
import Footer from './components/footer';
import './App.css';
import { render } from '@testing-library/react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_top_menu: 1,
      selected_side_menu: 1
    }
  };
  changeMenuHandler = (type, id) => {
    if (type === 'top_menu') {
      this.setState({
        selected_top_menu: id,
        selected_side_menu: 1
      });
    } else if (type === 'side_menu') {
      this.setState({
        selected_side_menu: id
      });
    }
  };
  render() {
    return (
      <div>
        <Header />
        <TopMenu id={this.state.selected_top_menu} changeMenuHandler={this.changeMenuHandler} />
        <Content top_menu_id={this.state.selected_top_menu} side_menu_id={this.state.selected_side_menu} />
        <Footer />
      </div>
    );
  }
}

export default App;
