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
  color: #6b717b;
  font-size: 2rem;
  line-height: 1;
  position: relative;
  margin: 0;
  width: 1em;
  cursor: pointer;
  outline: none;
  @media screen and (min-width: 64em) {
    display: block;
    position: fixed;
    z-index: 3;
    top: 4.5rem;
    right: 41.66667%;
    background-color: White;
    margin-right: -4px;
    padding: 0 0.375rem 0.1875rem;
    box-shadow: -4px 4px 0 rgba(0, 0, 0, 0.1);
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
