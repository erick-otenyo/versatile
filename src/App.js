import React, { Component } from 'react';
import styled from 'styled-components';

import Header from './components/Header';
// import Search from './components/Search';
// import SideBar from './components/SideBar';
import Map from './components/Map';
import Content from './components/Content';
import CloseButton from './components/CloseButton';

import './global-styles';

const Main = styled.div`
  display: flex;
  flex-flow: row wrap;
  position: relative;
  padding: 0;
  margin: 0;
  z-index: 1;
  height: calc(100vh - 4rem);
  background-color: #fafafa;
  overflow-y: auto;
  max-height: 100%;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-stype: -ms-autohiding-scrollbar;
  overflow-x: hidden @media print, screen and (min-width: 40em) {
    height: calc(100vh - 4rem);
  }
  @media screen and (min-width: 64em) {
    overflow: hidden;
  }
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { contentOpen: true, activeGeography: 'region' };
  }
  toggleContent = () => {
    this.setState({ contentOpen: !this.state.contentOpen });
  };
  toggleGeography = key => {
    this.setState({ activeGeography: key });
  };
  render() {
    const { contentOpen, activeGeography } = this.state;
    return (
      <div>
        <Header title="NVIP" />
        <Main contentOpen={contentOpen}>
          <Map
            contentOpen={contentOpen}
            activeGeography={activeGeography}
            toggleGeography={this.toggleGeography}
            toggleContent={this.toggleContent}
          />
          <CloseButton
            visible={contentOpen}
            toggleContent={this.toggleContent}
          />
          <Content open={contentOpen} />
        </Main>
      </div>
    );
  }
}

export default App;
