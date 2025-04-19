import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { Outlet } from 'react-router-dom'
import Hero from './pages/Hero.jsx'
import VeggieList from './components/VeggieList.jsx'
import Layout from './Layout.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,

} from "react-router-dom";
import Features from './pages/Features.jsx'
import LoginSeller from './pages/LoginSeller.jsx'
import ReactDOM from 'react-dom/client'
import LoginBuyer from './pages/LoginBuyer.jsx'




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Hero />}>
        <Route path="login-buyer" element={<LoginBuyer />} />
        <Route path="login-seller" element={<LoginSeller />} />
      </Route>
      <Route path="features" element={<Features />} />
      <Route path="veggielist" element={<VeggieList />} />
      <Route path="forfarmers" element={<LoginSeller />} />
    </Route>
  ),
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />

  </StrictMode>,
)
