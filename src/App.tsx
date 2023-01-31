import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client';
import { FormLogin } from './components/form-login/form-login'


const client = new ApolloClient({
  uri:'https://template-onboarding-node-sjz6wnaoia-uc.a.run.app/graphql' ,
  cache: new InMemoryCache(),
});


export const App = (): JSX.Element => {
  return (
  
     <ApolloProvider client={client}>
          <FormLogin />
     </ApolloProvider>
        
  );
}

