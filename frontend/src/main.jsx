
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import { RouterProvider,createBrowserRouter, createRoutesFromElements,Route } from "react-router";
import Contact from './components/Contact.jsx'
import Team from './components/Team.jsx'


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
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"ourteam",
        element:<Team/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/> 
  
)
 
