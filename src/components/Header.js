import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import logo from '../logo.svg';

const SiteHeaderWrapper = styled.div`
  position: relative;
  z-index: 3;
  background-color: #fefefe;
  box-shadow: 0 4px 0 rgba(0, 0, 0, 0.1);
`;

const SiteHeader = styled.div`
  display: flex;
  height: 4rem;
  flex-flow: row wrap;
`;

const Branding = styled.div`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-right: 0.625rem;
  padding-left: 0.625rem;
  width: auto;
  @media print, screen and (min-width: 40em) {
    padding-right: 0.9375rem;
    padding-left: 0.9375rem;
  }
  @media screen and (min-width: 64em) {
    flex: 1 1 0px;
    width: auto;
    padding-right: 1.25rem;
    padding-left: 1.25rem;
  }
`;

const Logo = styled.a``;

const LogoImage = styled.img`
  height: 1.5rem;
  float: left;
  margin-right: 1rem;
  @media print, screen and (min-width: 40em) {
    height: 2.25rem;
  }
`;

const Title = styled.a`
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.5;
  text-decoration: none;
  @media print, screen and (min-width: 40em) {
    font-size: 1.8rem;
  }
`;

const Header = ({ title }) => {
  return (
    <SiteHeaderWrapper>
      <header>
        <SiteHeader>
          <Branding>
            <Logo>
              <LogoImage src={logo} />
            </Logo>
            <Title href="#">{title}</Title>
          </Branding>
        </SiteHeader>
      </header>
    </SiteHeaderWrapper>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
