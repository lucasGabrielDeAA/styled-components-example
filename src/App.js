import React from 'react';

import './App.css';

import { StyledComponents } from './components';

const App = () => (
  <StyledComponents.Wrapper>
    <StyledComponents.Title>Hello World, this is my first styled component!</StyledComponents.Title>

    <StyledComponents.Button>Normal Button</StyledComponents.Button>

    <StyledComponents.Link href="https://github.com/lucasGabrielDeAA/styled-components-example">GitHub repository</StyledComponents.Link>
  </StyledComponents.Wrapper>
);

export default App;
