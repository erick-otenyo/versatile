import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  z-index: 3;
  box-shadow: 0 4px 0 rgba(0, 0, 0, 0.1);
  padding: 0.5rem 0.25rem 0.25rem;
  @media print, screen and (min-width: 40em) {
    position: absolute;
    top: 0;
    right: 0;
    width: 15rem;
    height: 3.25rem;
    overflow: visible;
    background-color: WhiteSmoke;
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.1), -4px 0 0 rgba(0, 0, 0, 0.1);
    width: 25%;
  }
  @media screen and (min-width: 64em) {
    right: auto;
    left: 0;
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.1), 4px 0 0 rgba(0, 0, 0, 0.1);
    width: 16.66667%;
  }
`;

const Input = styled.input`
  margin: 0px;
  width: 100%;
  height: 2.5 rem;
  box-sizing: border-box;
  padding: 0.5rem;
`;

const Search = () => {
  return (
    <Wrapper className="cell medium-3 large-2">
      <Input placeholder="Search" />
    </Wrapper>
  );
};

export default Search;
