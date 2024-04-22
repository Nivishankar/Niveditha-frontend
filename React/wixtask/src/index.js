import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import PortfolioPage from './pages/PortfolioPage';
import AboutPage from './pages/AboutPage';
import ClientAlbumsPage from './pages/ClientAlbumsPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';




import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "Portfolio",
    element: <PortfolioPage/>,
  },
  {
    path: "About",
    element: <AboutPage/>,
  },
  
  {
    path: "ClientAlbums",
    element: <ClientAlbumsPage/>,
  },
  {
    path: "Contacts",
    element: <ContactPage/>,
  },

  {
    path: "Blog",
    element: <BlogPage/>,
  },

  
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <RouterProvider router={router}/>
    // <App/>
  
);


