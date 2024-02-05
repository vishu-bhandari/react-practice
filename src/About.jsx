import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const About = (props) => {
  return (
    <>
      <div className="container mx-auto">
        <h1
          className="text-center mt-5 
      "
        >
          hello, i am {props.name} page
        </h1>
        <br />
        <div className="text-center">
          <button className="btn btn-outline-success ">
            welcome to future
          </button>
        </div>
      </div>
    </>
  );
};

export default About;
