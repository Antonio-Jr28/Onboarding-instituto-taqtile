import React from 'react'

import { WrapperLogin } from './form-style';
import { Title } from '../title/title';
import { Input } from '../input/input';
import { Btn } from '../button/button';

export const FormLogin = ():JSX.Element => 
         <form>
             <WrapperLogin>
                <Title />
                <Input />
                <Btn />
             </WrapperLogin>
        </form>