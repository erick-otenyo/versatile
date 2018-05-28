import React, { Component } from 'react';
import styled from 'styled-components';
import ReactMapboxGl from 'react-mapbox-gl';

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiZXJpY2tvdGVueW8iLCJhIjoiY2owYXlsb2kxMDAwcjJxcDk3a2Q0MmdpZSJ9.GJQzHfNMElZ7OhW_HbnaXw',
});

const height = ({ contentOpen }) =>
  contentOpen
    ? ''
    : '@media print, screen and (min-width: 40em) {height: calc(100vh - 4rem)}';

const Wrapper = styled.div`
  height: 60vh;
  ${height};
  @media screen and (min-width: 64em) {
    height: 100%;
  }
`;

class MainMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapLoaded: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.state.mapLoaded &&
      nextProps.contentOpen !== this.props.contentOpen
    ) {
      window.dispatchEvent(new Event('resize'));
      // this.map.resize();
    }
  }

  onStyleLoad = m => {
    this.map = m;
    this.setState({ mapLoaded: true });
  };

  render() {
    return (
      <Wrapper
        contentOpen={this.props.contentOpen}
        className="cell medium-auto large-order-2"
      >
        <Map
          containerStyle={{
            width: '100%',
            height: '100%',
          }}
          // eslint-disable-next-line
          style="mapbox://styles/mapbox/streets-v8"
          onStyleLoad={c => (this.map = c)}
        />
      </Wrapper>
    );
  }
}

export default MainMap;
