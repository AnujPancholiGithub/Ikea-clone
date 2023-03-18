import React from 'react'
import { Route, Routes } from "react-router-dom"
import Login from '../login/Login'
import Signup from '../signup/Signup'

export default function AllRoutes() {
    let arr=[
        {
            path:"/login",
            element:<Login/>
        },
        {
            path:"/",
            element:<Signup/>
        }
    ]
  return (
    <>
      <Routes>
        {
            arr.map((e,id)=>{
                return <Route path={e.path} element={e.element} key={id}/>
            })
        }
      </Routes>
    </>
  )
}
