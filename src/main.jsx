import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from './components/Contact.jsx';
import About from './components/About.jsx';
import Home from './components/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[

      {
        path: "/",
        element: <Home />,
      },

      
     {
        path: "/about",
        element: <About/>,
      },

      {
        path: "/contact",
        element: <Contact/>,
      },

    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  
  </React.StrictMode>,
)
