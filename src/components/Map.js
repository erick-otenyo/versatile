import React, { Component } from 'react';
import styled from 'styled-components';
import ReactMapboxGl, { ZoomControl, ScaleControl } from 'react-mapbox-gl';

import GeographySelector from './GeographySelector';
import ContentLink from './ContentLink';

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiZXJpY2tvdGVueW8iLCJhIjoiY2owYXlsb2kxMDAwcjJxcDk3a2Q0MmdpZSJ9.GJQzHfNMElZ7OhW_HbnaXw',
});

const height = ({ contentOpen }) =>
  contentOpen ? '50vh' : 'calc(100vh - 4rem)';

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  z-index: 1;
  height: ${height};
  @media screen and (min-width: 64em) {
    flex: 1 1 0px;
    width: auto;
    height: 100%;
    overflow-y: auto;
    max-height: 100%;
    overflow-x: hidden;
  }
`;

class MainMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapLoaded: false,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.mapLoaded) {
      this.map.resize();
    }
  }

  onStyleLoad = m => {
    this.map = m;
    this.setState({ mapLoaded: true });
  };

  render() {
    return (
      <Wrapper contentOpen={this.props.contentOpen}>
        <Map
          containerStyle={{
            width: '100%',
            height: '100%',
            zIndex: 1,
          }}
          // eslint-disable-next-line
          style="mapbox://styles/mapbox/streets-v8"
          center={[37.8369140625, 0.5163504323777589]}
          zoom={[6]}
          onStyleLoad={this.onStyleLoad}
        >
          {/* other map layers will go here */}
          <ZoomControl
            style={{
              boxShadow: '0 0 0 2px rgba(0, 0, 0, 0.1)',
              borderRadius: 4,
            }}
            position="top-left"
          />
          <GeographySelector
            active={this.props.activeGeography}
            toggleGeography={this.props.toggleGeography}
          />
          <ContentLink
            contentOpen={this.props.contentOpen}
            toggleContent={this.props.toggleContent}
          />
          <ScaleControl style={{ bottom: 30 }} position="bottom-left" />
        </Map>
      </Wrapper>
    );
  }
}

export default MainMap;
