import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const height = ({ contentOpen }) =>
  contentOpen ? 'calc(100vh - 4rem)}' : 'calc(60vh - 3.25rem)';

const Wrapper = styled.div`
  z-index: 2;
  padding: 1rem;
  background-color: WhiteSmoke;
  @media print, screen and (min-width: 40em) {
    margin-top: 3.25rem;
    height: ${height};
    overflow-y: auto;
    box-shadow: -4px 0 0 0 rgba(0, 0, 0, 0.1);
  }
  @media screen and (min-width: 64em) {
    height: calc(100% - 3.25rem);
    box-shadow: 4px 0 0 0 rgba(0, 0, 0, 0.1);
  }
`;

const HeaderTitle = styled.h5``;

const SideBar = ({ header, contentOpen }) => {
  return (
    <Wrapper
      contentOpen={contentOpen}
      className="cell medium-3 large-2 large-order-1 show-for-medium"
    >
      <HeaderTitle>{header}</HeaderTitle>
    </Wrapper>
  );
};

SideBar.propTypes = {
  header: PropTypes.string,
};

export default SideBar;
