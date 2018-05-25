import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import CloseButton from './CloseButton';

const ContentWrapper = styled.div`
  padding: 1rem;
  z-index: 3;
  @media screen and (min-width: 64em) {
    box-shadow: -4px 0 0 0 rgba(0, 0, 0, 0.1);
    height: calc(100%);
    overflow-y: auto;
  }
`;

const Content = props => {
  return (
    <React.Fragment>
      <CloseButton onClose={props.onClose} />
      <ContentWrapper className="cell large-5 large-order-3">
        <h5>Hello</h5>
      </ContentWrapper>
    </React.Fragment>
  );
};

Content.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Content;
