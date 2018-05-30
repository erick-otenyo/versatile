import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  min-height: calc(50vh - 4rem);
  background-color: #fafafa;
  padding: 1rem;
  overflow-y: auto;
  box-shadow: -4px 0 0 0 rgba(0, 0, 0, 0.1);
  @media screen and (min-width: 64em) {
    box-shadow: -4px 0 0 0 rgba(0, 0, 0, 0.1);
    overflow: visible;
    width: 41.66667%;
    overflow-y: auto;
    height: calc(100%);
    max-height: 100%;
    overflow-x: hidden;
  }
  @media screen and (min-width: 75em) {
    flex-basis: auto;
    width: 33.33333%;
  }
`;

const Lead = styled.p`
  font-size: 1.5rem;
  line-height: 1.4;
  text-align: center;
`;

const Content = ({ open, onClose }) => {
  if (open) {
    return (
      <ContentWrapper>
        <Lead>Welcome.</Lead>
        <Lead>
          Use this section to display dynamic content based on your data
        </Lead>
      </ContentWrapper>
    );
  }
  return null;
};

Content.propTypes = {};

export default Content;
