import React from 'react';

import { Title } from "./components/title/title";
import { FormLogin } from './components/input/input'
import { LoginStyle } from './style-app';


export function App() {
  return (
    <LoginStyle>
    <Title />
    <FormLogin />
    
    </LoginStyle>
  )
}


