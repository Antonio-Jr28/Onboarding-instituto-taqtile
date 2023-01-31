import React from 'react';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import { MyRoutes } from './router/routes';

const client = new ApolloClient({
  uri:'https://template-onboarding-node-sjz6wnaoia-uc.a.run.app/graphql' ,
  cache: new InMemoryCache(),
});


export const App = (): JSX.Element => {
  return (
  
     <ApolloProvider client={client}>
          <MyRoutes />
     </ApolloProvider>
        
  );
}

