import React, { useEffect, useState } from 'react';
import './style.min.css';
import TodoList from './components/TodoList';
import InputForm from './components/InputForm';
import TodoProvider from './contexts/TodoContext';
import HomeView from './views/HomeView';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProductsContext } from './contexts/contexts';
import CategoriesView from './views/CategoriesView';
import ProductsView from './views/ProductsView';
import ProductDetailsView from './views/ProductDetailsView';
import ContactsView from './views/ContactsView';
import SearchView from './views/SearchView';
import CompareView from './views/CompareView';
import WishlistView from './views/WishlistView';
import ShoppingcartView from './views/ShoppingCartView';
import NotFoundView from './views/NotFoundView';



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
        <Route path="/categories" element={<CategoriesView />} />
        <Route path="/products" element={<ProductsView />} />
        <Route path="/products/:name" element={<ProductDetailsView />} />
        <Route path="/contacts" element={<ContactsView />} />
        <Route path="/search" element={<SearchView />} />
        <Route path="/compare" element={<CompareView />} />
        <Route path="/wishlist" element={<WishlistView />} />
        <Route path="/shoppingcart" element={<ShoppingcartView />} />
        <Route path="*" element={<NotFoundView />} />
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


