import React from 'react';
import styled from 'styled-components';

const CloseButtonContainer = styled.div`
  position: relative;
  z-index: 4;
  width: 100%;
  box-shadow: 0 -2px 0 rgba(0, 0, 0, 0.1);
  background-color: White;
  text-align: right;
  padding: 1rem 1rem 0;
  margin-bottom: -1rem;
  @media screen and (min-width: 64em) {
    padding: 0;
    margin-bottom: 0;
  }
`;

const CloseButton = styled.button`
  vertical-align: middle;
  font-family: inherit;
  -webkit-appearance: none;
  transition: background-color 0.25s ease-out, color 0.25s ease-out;
  cursor: pointer;
  display: inline-block;
  position: absolute;
  background-color: #fafafa;
  color: #fc5b5b;
  margin: 0 0 1rem;
  border: 1px solid transparent;
  border-radius: 0.3rem;
  line-height: 1;
  text-align: center;
  top: 50vh;
  right: 0;
  z-index: 3;
  font-size: 1.25rem;
  padding: 0.4em 0.5em;
  @media screen and (min-width: 64em) {
    padding: 4px 0 4px 8px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    top: 0.625rem;
    right: calc(41.66667% + 8px);
    box-shadow: 8px 0 0 0 #fafafa, 0 0 0 4px rgba(0, 0, 0, 0.1);
  }
`;

const ContentCloseButton = ({ onClose }) => {
  return (
    <CloseButtonContainer>
      <CloseButton onClick={onClose}>×</CloseButton>
    </CloseButtonContainer>
  );
};

export default ContentCloseButton;
