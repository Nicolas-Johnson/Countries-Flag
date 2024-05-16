import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './sass/style.scss'
import ErrorPage from './pages/Error.jsx';
import AboutCountrie from './pages/AboutCountrie.jsx';
import Header from './components/Header.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App className="dark-mode"/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "about/:aboutId",
    element: <AboutCountrie />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
