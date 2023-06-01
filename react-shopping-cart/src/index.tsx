import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';

//styles
import { Wrapper } from './App.styles';

const getProducts = async()=> 
await(await fetch('https://fakestoreapi.com/products')).json();

const client = new QueryClient();

ReactDOM.render(
<QueryClientProvider client={client}>
  <App />
</QueryClientProvider>
, document.getElementById('root')
);

