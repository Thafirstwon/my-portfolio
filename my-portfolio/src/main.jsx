import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import { NavbarProvider } from './Context/NavbarContext.jsx';
import ScrollToTop from './Components/ScrollToTop.jsx';


// Prevent automatic scroll restoration on history navigation  
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

createRoot(document.getElementById('root')).render(
<StrictMode>
   <BrowserRouter>
   <NavbarProvider>
    <ScrollToTop />
      <App />
   </NavbarProvider>
    </BrowserRouter>
  </StrictMode>,
)
