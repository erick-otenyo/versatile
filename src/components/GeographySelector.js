import React from 'react';
import styled from 'styled-components';

// "top: 10px;right: auto; bottom: auto;left:10px;position: absolute,"

const UL = styled.ul`
  position: absolute;
  left: 50px;
  top: 10px;
  z-index: 2;
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  line-height: 1.6;
  font-size: 0.6875rem;
  font-weight: 700;
  overflow: hidden;
  border-radius: 4px;
  background-color: #fafafa;
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
  li:not(:last-child) {
    border-right: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

const ListItem = styled.li`
  font-size: inherit;
`;

const active = ({ active }) =>
  active ? 'background: #ae561f;color: #fefefe' : '';

const Title = styled.a`
  line-height: 1;
  text-decoration: none;
  display: block;
  padding: 0.7rem 1rem;
  cursor: pointer;
  ${active};
`;

const GeographySelector = props => {
  return (
    <UL>
      <ListItem onClick={() => props.toggleGeography('regionA')}>
        <Title active={props.active === 'regionA' ? true : false}>Region A</Title>
      </ListItem>
      <ListItem onClick={() => props.toggleGeography('regionB')}>
        <Title active={props.active === 'regionB' ? true : false}>
          Region B
        </Title>
      </ListItem>
      <ListItem onClick={() => props.toggleGeography('regionC')}>
        <Title active={props.active === 'regionC' ? true : false}>
          Region C
        </Title>
      </ListItem>
    </UL>
  );
};

export default GeographySelector;
