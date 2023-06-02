import {useState} from 'react'
import { useQuery } from 'react-query';

//components
import  Drawer  from '@material-ui/core/Drawer';
import  LinearProgress  from '@material-ui/core/LinearProgress';
import  Grid  from '@material-ui/core/Grid';
import  AddShoppingCart  from '@material-ui/icons/AddShoppingCart';
import  Badge  from '@material-ui/core/Badge';

//styles
import { Wrapper } from './App.styles';
//types

export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}

const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch('https://fakestoreapi.com/products')).json();

const App = ()  => {
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products',
    getProducts );

    const getTotalItems= () => null;

    const handleAddToCart = (clickedItem: CartItemType) => null;

    const handleRemoveFromCart = () => null;

    if (isLoading) return <LinearProgress />
    if(error) return <div> something wen wrong</div>
  return  <div className="App">
     start
    </div>
  
};

export default App;
