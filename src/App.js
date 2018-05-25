import React, { Component } from 'react';
import styled from 'styled-components';

import Header from './components/Header';
import Search from './components/Search';
import Map from './components/Map';
import SideBar from './components/SideBar';
import Content from './components/Content';

const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  @media screen and (min-width: 64em) {
    height: calc(100vh - 4rem);
  }
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { contentOpen: true };
  }

  handleOnContentButtonClose = () => {
    this.setState({ contentOpen: !this.state.contentOpen });
    window.dispatchEvent(new Event('resize'));
  };
  render() {
    const { contentOpen } = this.state;
    return (
      <div>
        <Header title="Versatile Mapp" />
        <Wrapper contentOpen={contentOpen} className="grid-x">
          <Search />
          <Map contentOpen={contentOpen} />
          <SideBar contentOpen={contentOpen} header="Sidebar" />
          {contentOpen && <Content onClose={this.handleOnContentButtonClose} />}
        </Wrapper>
      </div>
    );
  }
}

export default App;
