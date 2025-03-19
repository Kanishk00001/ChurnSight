
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import { RouterProvider,createBrowserRouter, createRoutesFromElements,Route } from "react-router";


const router=createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children:[
      {
        path:"",
        element:<Home />
      },
      {
        path:"about",
        element:<About/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/> 
  
)
 
