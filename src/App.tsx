import React, { useEffect, useState } from 'react';
import './style.min.css';
import TodoList from './components/TodoList';
import InputForm from './components/InputForm';
import TodoProvider from './contexts/TodoContext';
import HomeView from './views/HomeView';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProductsContext } from './contexts/contexts';



const App: React.FC = () => {

  const [products, setProducts] = useState([])
  const [featured, setFeatured] = useState([])
  const [deals, setDeals] = useState([])

  useEffect(() => {
    const fetchAllProducts = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products')
      setProducts(await result.json())
    }
    fetchAllProducts()

    const fetchFeaturedProducts = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
      setFeatured(await result.json())
    }
    fetchFeaturedProducts()

    const fetchDealsProducts = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')
      setDeals(await result.json())
    }
    fetchDealsProducts()

  }, [setProducts, setFeatured, setDeals])  

  
  return (
    <BrowserRouter>
      <ProductsContext.Provider value={{products, featured, deals}}>
        <Routes>
          <Route path="/" element={<HomeView />} />
    
        </Routes>
      </ProductsContext.Provider>
    </BrowserRouter>
  );
}

export default App;




// <TodoProvider>
// <div className="d-flex justify-content-center mt-3 w-50 border">
//   <div className="container">
//     <h1 style={{textAlign:"center"}}>TODO LIST</h1>
//     <InputForm />
//     <TodoList />
//   </div>
// </div>
// </TodoProvider>


