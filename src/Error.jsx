import React from 'react'
import { NavLink } from "react-router-dom";

const Error=()=> {
  return (
    <>
        <h1>oops! page not found</h1>
        <NavLink   to='/'>Go back</NavLink>
    </>
  )
}

export default Error