import React from 'react'

import { Whapper, WhapperTitle, UsersName, UsersEmail, Container, BoxName, BoxEmail } from './list-style'
import { GetUserQuery } from "../../service/get-user-query";
import { useQuery } from '@apollo/client';

interface UserType {
  email: 'string',
  name: 'string',
  id: number,  
}
export const ListUsers = ():JSX.Element => {

  const token = localStorage.token;
    console.log(token); 
  const { data } = useQuery(GetUserQuery, {
  context: {
      headers: {
        Authorization: token,
      },
    },
  });
    console.log(data);

  
  
    return (
    <Whapper>
      <WhapperTitle> Lista de Usuarios</WhapperTitle>
      <Container>
        <BoxName>
          <UsersName>Nome</UsersName>
          {data?.users?.nodes?.map((user:UserType)=>
          <p key={user.id}>{user.name}</p>)}
        </BoxName>

        <BoxEmail>
          <UsersEmail>Email</UsersEmail>
          {data?.users?.nodes?.map((user:UserType)=>
          <p key={user.id}>{user.email}</p>)}
        </BoxEmail>
      </Container>
    </Whapper>
    )
}
  

