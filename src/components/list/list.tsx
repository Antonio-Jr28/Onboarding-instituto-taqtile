import React, { useState} from 'react'

import { Whapper, WhapperTitle, UsersName, UsersEmail, Container, BoxName, BoxEmail, Navigation, BtnPrevious, BtnNext } from './list-style'
import { getUsersQuery } from "../../service/get-user-query";
import { useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';


interface UserType {
  email: 'string',
  name: 'string',
  id: number,  
}
export const ListUsers = ():JSX.Element => {
  const navigate = useNavigate();
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
  console.log(data);
 
  const nextPageexists = data?.users?.pageInfo?.hasNextPage;
  const previousPageexists = data?.users?.pageInfo?.hasPreviousPage;

  const nextPage = () => {
    setOfsset(offset + limit);
  };
  const previusPage = () => {
    setOfsset(offset - limit);
  };

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

      <Navigation>
          <BtnPrevious onClick={previusPage} disabled={!previousPageexists}>Anterior</BtnPrevious>

          <BtnNext onClick={nextPage} disabled={!nextPageexists}>Proximo</BtnNext>
        </Navigation> 
    </Whapper>
    )
}
  

