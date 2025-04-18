import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
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



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="home" element={<Hero />} />
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
