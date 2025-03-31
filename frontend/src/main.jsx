
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import { RouterProvider,createBrowserRouter, createRoutesFromElements,Route } from "react-router";
import Contact from './components/Contact.jsx'
import Team from './components/Team.jsx'
import Telecom from './components/Telecom.jsx'
import Credit from './components/Credit.jsx'
import Retail from './components/Retail.jsx'
import Travel from './components/Travel.jsx'


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
      },
      {
        path:"telecom",
        element:<Telecom/>
      },
      {
        path:"credit",
        element:<Credit/>
      },
      {
        path:"retail",
        element:<Retail/>
      },
      {
        path:"travel",
        element:<Travel/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/> 
  
)
 
