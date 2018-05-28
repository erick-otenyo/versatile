import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SiteHeaderWrapper = styled.div`
  position: relative;
  z-index: 3;
  background-color: #fefefe;
  box-shadow: 0 4px 0 rgba(0, 0, 0, 0.1);
`;

const SiteHeader = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const Branding = styled.div`
  padding-top: 1;
  padding-bottom: 1rem;
  flex: 1 1 0px;
  width: auto;

}
`;

const Title = styled.a`
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 3rem;
  text-decoration: none;
  @media print, screen and (min-width: 40em) {
    font-size: 1.8rem;
  }
  @media screen and (min-width: 64em) {
    padding-right: 1.25rem;
    padding-left: 1.25rem;
  }
`;

const Header = ({ title }) => {
  return (
    <SiteHeaderWrapper>
      <header>
        <SiteHeader>
          <Branding>
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
