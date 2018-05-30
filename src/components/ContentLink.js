import React from 'react';
import styled from 'styled-components';
import FaAlignLeft from 'react-icons/lib/fa/align-left';
import FaChevronLeft from 'react-icons/lib/fa/chevron-left';
import FaChevronUp from 'react-icons/lib/fa/chevron-up';

const Link = styled.a`
  vertical-align: middle;
  font-family: inherit;
  -webkit-appearance: none;
  transition: background-color 0.25s ease-out, color 0.25s ease-out;
  cursor: pointer;
  display: inline-block;
  position: absolute;
  padding: 0.85em 1em;
  border: 1px solid transparent;
  border-radius: 0.3rem;
  font-size: 0.9rem;
  line-height: 1;
  text-align: center;
  background-color: #fefefe;
  color: #ae561f;
  z-index: 2;
  right: 50%;
  bottom: 0;
  margin: 0;
  @media screen and (min-width: 64em) {
    top: 10px;
    right: 0;
    bottom: auto;
    padding-left: 0.5rem;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
  }
  @media screen and (max-width: 63.9375em) {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    padding: 0.375rem 1rem;
  }
`;

const SpanVisibleLarge = styled.span`
  @media screen and (max-width: 63.9375em) {
    display: none !important;
  }
`;
const SpanVisibleSmall = styled.span`
  @media screen and (min-width: 64em) {
    display: none !important;
  }
`;

const ContentLink = ({ contentOpen, toggleContent }) => {
  if (!contentOpen) {
    return (
      <Link onClick={toggleContent}>
        <SpanVisibleLarge>
          <FaChevronLeft />
          <FaAlignLeft />
        </SpanVisibleLarge>
        <SpanVisibleSmall>
          <FaChevronUp />
        </SpanVisibleSmall>
      </Link>
    );
  }
  return null;
};

export default ContentLink;
