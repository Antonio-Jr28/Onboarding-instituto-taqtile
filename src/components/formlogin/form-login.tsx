import React, { useState } from 'react'
import { ApolloError, useMutation  } from '@apollo/client';
import { QueryLogar } from '../../service/request-login';

import { WrapperLogin, Form } from './form-style';
import { Title } from '../title/title';
import { Input } from '../input/input';
import { Button } from '../button/button';


export const FormLogin = ():JSX.Element => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const handleEmail = (value:string) => {
    setEmail(value)
    }
    const handlePassword = (value:string) => {
    setPassword(value)
    }       

   const [login, {loading}] = useMutation(QueryLogar, {
        onError:(error: ApolloError) => {
            alert('Login ou senha invalido, Por gentileza inserir novamente...');
            console.log(error);
        },
        onCompleted: (e: any) => {
            const tokenValue = e.login.token;
            localStorage.setItem('token', tokenValue);
            
            alert('Bem Vindo Usuario!!');

        },
    });
    const enviarForm = (e: { preventDefault: () => void }) => {
        {console.log(email, password);
        e.preventDefault();
        login ({
            variables: {
                data: {email, password },
            }
        })
        }
    }
        
   return (

         <Form>
             <WrapperLogin>
                <Title />
                <Input email={email} password={password} onChangeEmail={handleEmail} onChangePassword={handlePassword} />
                <Button LoadingButton={loading} onClick={enviarForm} />
             </WrapperLogin>
        </Form>
         )
}