import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

const ContentWrapper = styled.div`
  flex: 0 0 auto;
  position: relative;
  z-index: 2;
  min-height: calc(50vh - 4rem);
  background-color: #fafafa;
  padding: 1rem 1rem 4rem;
  box-shadow: 0 -4px 0 0 rgba(0, 0, 0, 0.1);
  @media screen and (min-width: 64em) {
    box-shadow: -4px 0 0 0 rgba(0, 0, 0, 0.1);
    overflow: visible;
    width: 41.66667%;
    overflow-y: auto;
    max-height: 100%;
    overflow-x: hidden;
  }
  @media screen and (min-width: 75em) {
    flex-basis: auto;
    width: 33.33333%;
  }
`;

const Content = ({ open, onClose }) => {
  if (open) {
    return (
      <ContentWrapper>
        <h5>Hello</h5>
      </ContentWrapper>
    );
  }
  return null;
};

Content.propTypes = {};

export default Content;
