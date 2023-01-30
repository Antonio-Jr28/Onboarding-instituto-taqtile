import React, { useState} from 'react'

import { Wrapper, Title, UsersName, UsersEmail, Container, BoxName, BoxEmail, Navigation, BtnPrevious, BtnNext, BtnCreateUser } from './list-style'
import { getUsersQuery } from "../../service/get-user-query";
import { useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

interface UserType {
  id: number | 'string';
  email: 'string';
  name: 'string';
  phone: 'string';
}

export const ListUsers = ():JSX.Element => {

  const navigate = useNavigate();

  const Createuser = () => {
    {
    navigate('/usercreate');
    }
  };

  const token = localStorage.token;
  const limit = 20;
  const [offset, setOfsset] = useState(0);
  const { data } = useQuery(getUsersQuery, {
  context: {
      headers: {
        Authorization: token,
      },
    },
    variables: {
      data: {
        offset: offset,
        limit: limit
      }
      }
    ,  
  });

  const nextPageexists = data?.users?.pageInfo?.hasNextPage;
  const previousPageexists = data?.users?.pageInfo?.hasPreviousPage;

  const nextPage = () => {
    setOfsset(offset + limit);
  };
  const previusPage = () => {
    setOfsset(offset - limit);
  };

    return (
    <Wrapper>
      <Title> Lista de Usuarios </Title>
        <BtnCreateUser onClick={Createuser}>Novo Usuário</BtnCreateUser>
      <Container>
        <BoxName>
          <UsersName>Nome</UsersName>
          {data?.users?.nodes?.map((user:UserType)=>
          <p key={`column-name${user.id}`}>{user.name}</p>)}
        </BoxName>

        <BoxEmail>
          <UsersEmail>Email</UsersEmail>
          {data?.users?.nodes?.map((user:UserType)=>
          <p key={`column-email${user.id}`}>{user.email}</p>)}
        </BoxEmail>
      </Container>

      <Navigation>
          <BtnPrevious onClick={previusPage} disabled={!previousPageexists}>Anterior</BtnPrevious>
          <BtnNext onClick={nextPage} disabled={!nextPageexists}>Proximo</BtnNext>
        </Navigation> 
    </Wrapper>
    )
}
  

