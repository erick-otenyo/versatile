import React from 'react';
import styled from 'styled-components';
import FaClose from 'react-icons/lib/fa/close';

const CloseButton = styled.a`
  vertical-align: middle;
  font-family: inherit;
  -webkit-appearance: none;
  transition: background-color 0.25s ease-out, color 0.25s ease-out;
  cursor: pointer;
  margin: 0 0 1rem;
  border: 1px solid transparent;
  border-radius: 0.3rem;
  display: inline-block;
  position: absolute;
  background-color: #fafafa;
  color: #fc5b5b;
  line-height: 1;
  text-align: center;
  top: 50vh;
  right: 0;
  z-index: 3;
  font-size: 1.25rem;
  padding: 0.4em 0.5em

  :focus,
  &:hover {
    background-color: #fafafa;
    color: #fb2929;
  }

  @media screen and (min-width: 64em) {
    padding: 4px 0 4px 8px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    top: 0.625rem;
    right: calc(41.66667% + 8px);
    box-shadow: 8px 0 0 0 #fafafa, 0 0 0 4px rgba(0, 0, 0, 0.1);
  }

  @media screen and (min-width: 75em) {
    right: calc(33.333% + 8px);
  }
`;

const Span = styled.span`
  display: inline-block;
  margin-right: -8px;
  padding-right: 8px;
`;

const ContentCloseButton = ({ visible, toggleContent }) => {
  if (visible) {
    return (
      <CloseButton onClick={toggleContent}>
        <Span>
          <FaClose />
        </Span>
      </CloseButton>
    );
  }
  return null;
};

export default ContentCloseButton;

// vertical-align: middle;
//   font-family: inherit;
//   transition: background-color 0.25s ease-out, color 0.25s ease-out;
//   cursor: pointer;
//   text-decoration: none;
//   display: inline-block;
//   position: absolute;
//   background-color: #fafafa;
//   color: #fc5b5b;
//   margin: 0 0 1rem;
//   border: 1px solid transparent;
//   border-radius: 0.3rem;
//   line-height: 1;
//   text-align: center;
//   box-sizing: inherit;
//   top: 50vh;
//   right: 0;
//   z-index: 3;
//   font-size: 1.25rem;
//   padding: 0.4em 0.5em;
