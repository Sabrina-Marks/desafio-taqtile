import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import client from './apollo-studio/apollo.ts'
import router from './router/Router.tsx';
import {  RouterProvider } from 'react-router-dom';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router}/>
    </ApolloProvider>
  </StrictMode>,
);
