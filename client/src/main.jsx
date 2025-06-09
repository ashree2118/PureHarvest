import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes } from "react-router-dom";

import Login from './pages/auth/Login.jsx';
import Register from './pages/auth/Register.jsx';
import FarmDetail from './pages/buyer/FarmDetail.jsx';

import Cart from './pages/buyer/Cart.jsx';
import Checkout from './pages/buyer/Checkout.jsx';
import DashbardBuyer from './pages/buyer/DashboardBuyer.jsx';

import DashboardSeller from './pages/farmer/DashboardSeller.jsx';
import AddProduct from './pages/farmer/AddProduct.jsx';
import Orders from './pages/farmer/Orders.jsx';
import Hero from './pages/Hero.jsx';
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,

} from "react-router-dom";
import Features from './pages/Features.jsx'
import Layout from './Layout.jsx'
import ReactDOM from 'react-dom/client'

import ViewFarms from './pages/buyer/ViewFarms.jsx'




const router = createBrowserRouter(
  createRoutesFromElements(
    
      
     <> 
      
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<Features />} />
      <Route path="/farm/:farmId" element={<FarmDetail />} />

      
      
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Checkout />} />
        <Route path="/profile" element={<DashbardBuyer />} />
        <Route path="/farms" element={<ViewFarms />} />
        <Route path="/farm/:farmId" element={<FarmDetail />} />
      

      
      
        <Route path="/farmer/dashboardSeller" element={<DashboardSeller />} />
        <Route path="/farmer/inventory" element={<AddProduct />} />
        <Route path="/farmer/orders" element={<Orders />} />
      


       <Route path="/" element={<Layout />}>
       <Route path="/" element={<Hero />} />            
       <Route path="features" element={<Features />} />
       <Route path="farms" element={<ViewFarms />} />
        
     </Route>
     </>
     
    ),
  )


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />

  </StrictMode>,
)
