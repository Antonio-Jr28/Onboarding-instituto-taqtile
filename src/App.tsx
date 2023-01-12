import React from 'react';

import { Title } from "./components/title/title";
import { Input } from './components/input/input'
import { Button } from './components/button/button'
import { LoginStyle } from './style-app';


export function App() {
  return (
    <LoginStyle>
    <Title />
    <Input />
    <Button />
    </LoginStyle>
  )
}


