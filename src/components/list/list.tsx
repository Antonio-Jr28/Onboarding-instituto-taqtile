import React from 'react'

import { Whapper, WhapperTitle, UsersName, UsersEmail, Container, BoxName, BoxEmail } from './list-style'

export const ListUsers = ():JSX.Element => {

  const Users = [
    {name: 'Antonio',
     email: "antonio@taqtile.com.br",
     id: 1,
    },
    {name: 'Samuka',
     email: "samuel@taqtile.com.br",
     id: 2,
    },
    {name: 'Dan',
     email: "Daniel@taqtile.com.br",
     id: 2,
    },
  ]
    return (
    <Whapper>
      <WhapperTitle> Lista de Usuarios</WhapperTitle>
      <Container>
        <BoxName>
          <UsersName>Nome</UsersName>
          {Users.map((user)=>
          <p key={user.id}>{user.name}</p>)}
        </BoxName>

        <BoxEmail>
          <UsersEmail>Email</UsersEmail>
          {Users.map((user)=>
          <p key={user.id}>{user.email}</p>)}
        </BoxEmail>
      </Container>
    </Whapper>
    )
}
  

