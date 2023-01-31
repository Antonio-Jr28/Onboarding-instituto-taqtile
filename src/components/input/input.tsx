import React from 'react';

import { InputStyle } from './input-style';


interface InputProps{
        email:string;
        password: string;
        onChangeEmail: (value:string) => void;
        onChangePassword: (value:string) => void;         
        
}

export const Input = (props:InputProps):JSX.Element => {
        const handleEmail = (value:string) => {
        props.onChangeEmail(value)
        }
        const handlePassword = (value:string) => {
        props.onChangePassword(value)
        }       

        return (
        <>
        <InputStyle
                onChange={(e) => handleEmail(e.target.value)}
                value={props.email}
                name='email'
                type='email'
                placeholder='Email@example.com.br'
                required
                pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
                title='Digite um endereço de email valido. (NOTA:com letras minusculas)'
                id='mail'/>

                <InputStyle
                onChange={(e) => handlePassword(e.target.value)}
                value={props.password}
                name='password'
                placeholder='Digite sua senha'
                type='password'
                required
                pattern='(^(?=.*\d)(?=.*[a-zA-Z]).{7,}$)'
                title='Sua Senha deve possuir no minimo 7 caracteres, com pelo menos 1 letra e 1 numero'/>
        </>
        )
}