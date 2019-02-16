import React from 'react';

import './App.css';

import { Styles } from './components';

const App = () => (
  <Styles.Wrapper>
    <Styles.Title>Hello World, this is my first styled component!</Styles.Title>

    <Styles.Button>Normal Button</Styles.Button>
    <Styles.TomatoButton>Tomato Button</Styles.TomatoButton>
  </Styles.Wrapper>
);

export default App;
