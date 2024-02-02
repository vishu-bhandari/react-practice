import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Navbar from "./Navbar";
import Services from "./Services";
import User from "./User";

const App = () => {
  const Name = () => {
    return (
      <>
        <h1> hello , my name is vishu</h1>
      </>
    );
  };
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <About name='about' />
          }
        />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/service" element={<Services name="service" />} />
        <Route path="/user/" element={<User/>}/>
        <Route path="/contact/Name" element={<Name />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
