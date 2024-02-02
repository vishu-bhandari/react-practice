import React from 'react';
import { useParams , useLocation } from 'react-router-dom';

const User = () => {
  const {fname, lname} = useParams();
  const location=useLocation();
  console.log(location);

  return (
    <>
       <h1> this {fname } {lname} user page</h1>
       <p>my curr location is {location.pathname}</p>
       {location.pathname ===`/user/vishu/bhandari` ? (
       <button onClick={()=>{
        alert(`you are awseome`)
       }}>Click me</button> ) :null }
       
    </>
  );
}

export default User;
