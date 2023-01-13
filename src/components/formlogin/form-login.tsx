import React from 'react'

import { WrapperLogin, Form } from './form-style';
import { Title } from '../title/title';
import { Input } from '../input/input';
import { Button } from '../button/button';


export const FormLogin = ():JSX.Element => 
         <Form>
             <WrapperLogin>
                <Title />
                <Input />
                <Button />
             </WrapperLogin>
        </Form>