import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import Login from './pages/Login/Login.tsx';
import client from './apollo-studio/apollo.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={client}>
    <Login/>
    </ApolloProvider>
  </StrictMode>,
);
