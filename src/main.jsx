import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import BookDetails from './components/BookDetails/BookDetails';
import BookList from './components/BookList/BookList';
import { ToastContainer} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
      path:"/",
      element: <Home></Home>
    },
    {
      path:"listedBooks",
      element: <BookList></BookList>,
      loader: ()=>fetch('/booksData.json')
    },
    {
      path:"dashboard",
      element: <Dashboard></Dashboard>
    },
    {
      path: 'book/:bookId',
      element: <BookDetails></BookDetails>,
      loader: ()=>fetch('/booksData.json')
    }
  ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
     <ToastContainer />
  </StrictMode>,
)
