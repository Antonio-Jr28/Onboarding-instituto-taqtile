import React, { useState } from "react";
import { ApolloError, useMutation } from "@apollo/client";

import { useNavigate } from "react-router-dom";
import { createUser } from "../../service/create-user-mutation";
import { Form, Label, Input, Container, Wrapper, List, Box } from "./add-user-style";
import { Title } from "../title/title";
import { InputStyle } from "../input/input-style";

import { Button } from "../button/button"

export const AddUser = ():JSX.Element => {
    const today = new Date().toISOString().split('T')[0];
    const navegation = useNavigate();

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

    const token = localStorage.getItem('token');

    const [newUser, {loading: loadingBtn }] = useMutation(createUser, {
        context: {
            headers: {
                Authorization: token,
            },

        },
        onError: (error: ApolloError) => {
            console.log(error);
        },

        onCompleted: (e: any) => {
            alert('Cadastrado com Sucesso');
            navegation('/pageuser');
        },
    })
    
    function toSend(e: { preventDefault: () => void }) {
        e.preventDefault();

        newUser({
            variables: {
                data: { name, phone, birthDate, email, password, role }
            },
        });
    }
    
    
    return (
    <Box>    
        <Form onSubmit={toSend}>
            <Title text="Criar Conta" />


            <Label>Name:</Label>
            <InputStyle
                onChange={(e) => setName(e.target.value)}
                value={name}
                name="name"
                placeholder='Nome completo'
                type='username'
                required
                title='Nome e Sobrenome' />
            
            <Label>Telefone:</Label>
            <InputStyle 
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                name="phone"
                placeholder='Ex: (DDD)94002-8922'
                type='tel'
                required
                pattern='^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$'
                title='Telefone válido com no minimo 9 caracteres e o DDD.' />

            <Label>E-Mail:</Label>    
            <InputStyle 
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                name='email'
                placeholder='email@example.com.br'
                type='email'
                required
                pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
                title='Digite um endereço de email valido. '/>

            <Label>Senha:</Label>
            <InputStyle 
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                name='Password'
                placeholder='Digite sua Senha'
                type='password'
                required
                pattern='(^(?=.*\d)(?=.*[a-zA-Z]).{7,}$)'
                title='Sua Senha deve possuir no minimo 7 caracteres, com pelo menos 1 letra e 1 numero'/>

        <Wrapper>    
            <Container>
                <Label>Data de Nascimento</Label>
                <Input 
                onChange={(e) => setBirthDate(e.target.value)}
                value={birthDate}
                type='date'
                required
                max={today}
                title='Somente datas anteriores'/>
            </Container>
            <Label>Tipo</Label>
            <List 
                onChange={(e) => setRole(e.target.value)} value={role} name="role" placeholder="admin ou user" required>
                <option></option>
                <option value='admin'>Admin</option>
                <option value='user'>User</option>

            </List>

        </Wrapper>
            <Button 
            text="Cadastrar"
            LoadingButton={loadingBtn}
            type='submit' 
            />
        </Form>
    </Box>    
    )
}