import React, { useState} from 'react'


import { Wrapper, Title, UsersName, UsersEmail, Container, BoxName, BoxEmail, Navigation, BtnPrevious, BtnNext, BtnCreateUser, Details, BtnDetails } from './list-style'
import { getUsersQuery } from "../../service/get-user-query";
import { useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
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

  const DetailsUser = (id: "string" | number) => {
    navigate(`/detailsuser/${id}`);
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
      },  
  });
  const nextPageexists = data?.users?.pageInfo?.hasNextPage;
  const previousPageexists = data?.users?.pageInfo?.hasPreviousPage;

  const nextPage = () => {
    setOfsset(offset + limit);
  };
  const previusPage = () => {
    setOfsset(offset - limit);
  };

=======
>>>>>>> 81abbc9 (changes in the request)
    return (
    <Wrapper>
      <Title> Lista de Usuarios </Title>
        <BtnCreateUser onClick={Createuser}>Novo Usuário</BtnCreateUser>
      <Container>
        <BoxName>
          <UsersName>Nome</UsersName>
          {data?.users?.nodes?.map((user:UserType)=>
          <Details key={`column-name${user.id}`}>
          <p>{user.name}</p>
        </Details>
        )}
        </BoxName>

        <BoxEmail>
        <UsersEmail>Email</UsersEmail>
        {data?.users?.nodes?.map((user:UserType)=>
        <Details key={`column-email${user.id}`}>
        <p >{user.email} </p>
        <BtnDetails onClick={() => DetailsUser(user.id)}>Ver</BtnDetails>
        </Details> 
        )} 
        </BoxEmail>
      </Container>

      <Navigation>
          <BtnPrevious onClick={previusPage} disabled={!previousPageexists}>Anterior</BtnPrevious>
          <BtnNext onClick={nextPage} disabled={!nextPageexists}>Proximo</BtnNext>
        </Navigation> 
    </Wrapper>
    )
}
  

