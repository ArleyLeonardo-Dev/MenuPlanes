import React from 'react'
import ReactDOM from 'react-dom/client'
import Inicio from './Pages/Inicio'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'


//Paginas
const router = createBrowserRouter([
  {path:'/', element: <Inicio/> }
])

//Root
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
