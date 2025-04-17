import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom'
import Hero from './pages/Hero.jsx'
import VeggieList from './components/VeggieList.jsx'
import Layout from './Layout.jsx'
import { createBrowserRouter } from "react-router-dom";
import Features from './pages/Features.jsx'
import LoginSeller from './pages/LoginSeller.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Hero />} />
      <Route path="/features" element={<Features />} />
      <Route path="/veggielist" element={<VeggieList />} />
      <Route path="/forfarmers" element={<LoginSeller />} />
    </Route>
  ),
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />

  </StrictMode>,
)
