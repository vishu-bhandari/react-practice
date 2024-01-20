import React, { useState } from "react";

const App = () => {
  const [Fullname, setFullName] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
  });

  const inputEvent = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);

    // const value=event.target.value;
    // const name=event.target.name;
    const { value, name } = event.target;

   
    setFullName((prevValue) => {
      console.log(prevValue);
      return {
        ...prevValue,
        [name]:value,
      }
    });
  };
  const onSubmits = (event) => {
    event.preventDefault();
    alert("form submitted");
  };

  return (
    <>
      <div className="main_div">
        <form onSubmit={onSubmits}>
          <div>
            <h1>
              Hello {Fullname.fName} {Fullname.lName}
            </h1>
            <p> {Fullname.email}</p>
            <p>{Fullname.phone}</p>
            <input
              type="text"
              placeholder="Enter Your Name"
              name="fName"
              onChange={inputEvent}
              value={Fullname.fName}
            />
            <input
              type="text"
              placeholder="Enter your lastname"
              onChange={inputEvent}
              name="lName"
              value={Fullname.lName}
            />
            <input
              type="email"
              placeholder="Enter your email"
              onChange={inputEvent}
              name="email"
              value={Fullname.email}
            />
            <input
              type="number"
              placeholder="Enter your mobile"
              onChange={inputEvent}
              name="phone"
              value={Fullname.phone}
            />
            <button type="submit">Submit Me 👈🏻</button>
          </div>
        </form>
      </div>
    </>
  );
};
export default App;
