import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

const Link = ({ className, children, href }) => (
  <a className={className} href={href}>
    {children}
  </a>
);

const StyledComponents = () => <div />;

StyledComponents.Title = Title;
StyledComponents.Wrapper = Wrapper;
StyledComponents.Button = Button;
StyledComponents.Link = Link;

export default StyledComponents;
