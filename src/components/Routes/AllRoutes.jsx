import React from 'react'
import { Route, Routes } from "react-router-dom"
import Login from './../login/Login'
import Signup from './../signup/Signup'
import Products from "./../Products/Products"
import SingleProduct from '../Products/SingleProduct'
import ProductCart from '../Cart/ProductCart'
import Home from "./../Home/Home"



export default function AllRoutes() {
  let arr = [
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/Signup",
      element: <Signup />
    },
    {
      path: "/shop",
      element: <Products />
    },
    {
      path: "/shop/product/:elementID/:title/:random",
      element: <SingleProduct />
    },
    {
      path: "/shop/product/:id/:title",
      element: <SingleProduct />
    },
    {
      path: "/cart",
      element: <ProductCart />
    },
    {
      path: "/",
      element: <Home />
    }
  ]
  return (
    <>
      <Routes>
        {
          arr.map((e, id) => {
            return <Route path={e.path} element={e.element} key={id} />
          })
        }
      </Routes>
    </>
  )
}
