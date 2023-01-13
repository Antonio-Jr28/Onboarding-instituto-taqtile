import React from 'react'

import { InputStyle } from './input-style';

export const Input = ():JSX.Element =>
    <>
        <InputStyle
                type='email'
                placeholder='E-mail'
                required
                id='mail'/>
                <InputStyle
                type='password'
                placeholder='Password'
                pattern="/^
                (?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z$*&@#]{7,}"
                required/>
    </>;
