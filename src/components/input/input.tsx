import React from 'react'

import { InputStyle } from './input-style';

export const Input = ():JSX.Element =>
    <>
        <InputStyle
        type='email'
        placeholder='E-mail'/>
        
        <InputStyle
        type='password'
        placeholder='password'/>
    </>;

