import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  height: 4rem;
  position: relative;
  z-index: 2;
  background-color: #fff;
  box-shadow: 0 4px 0 0 rgba(0, 0, 0, 0.1);
  padding: 0 1rem;
`;

const Title = styled.div`
  font-size: 1.25rem;
  line-height: 4rem;
`;

const Header = ({ title }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
    </Wrapper>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
