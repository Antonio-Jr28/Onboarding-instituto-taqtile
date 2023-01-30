import React, { useState } from 'react'
import { useMutation  } from '@apollo/client';
import { QueryLogar } from '../../service/request-login';
import { useNavigate } from 'react-router-dom';
import { WrapperLogin, Form } from './form-style';
import { Title } from '../title/title';
import { Input } from '../input/input';
import { Button } from '../button/button';


export const FormLogin = ():JSX.Element => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const navigate = useNavigate();

   const handleEmail = (value:string) => {
    setEmail(value)
    }
    const handlePassword = (value:string) => {
    setPassword(value)
    }       

   const [login, {loading}] = useMutation(QueryLogar, {
        onError:() => {
            alert('Login ou senha invalido, Por gentileza inserir novamente...');
        },
        onCompleted: (e: any) => {
            const tokenValue = e.login.token;
            localStorage.setItem('token', tokenValue);
            

            navigate('/pageuser');
        },
    });
    const enviarForm = (e: { preventDefault: () => void }) => {
        {
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