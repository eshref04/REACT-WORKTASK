import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import MainContext from './context/Context';
import {  RouterProvider, createBrowserRouter } from 'react-router-dom';
import ROUTES from './Routes/Routes';
import axios from "axios"


function App() {
 const router = createBrowserRouter(ROUTES)
   const [data,setData] = useState([])

   const contextData={
    data,setData
  }

  useEffect(()=>{
     axios.get("http://localhost:5000/category").then(res=>{
      setData([...res.data])
      
     }).catch(error=>{
      alert(error)
     })
  },[])

  return (
    <>
   <MainContext.Provider value={contextData}>
    <RouterProvider router={router}/>
   </MainContext.Provider>

    </>
  )
}

export default App
