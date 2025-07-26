import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Hero />
  </StrictMode>,
)
