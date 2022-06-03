import React, { useState } from "react";
import "./styles.css";

function Index() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  const fname = (e) => {
    setName({ ...name, firstName: e.target.value });
    e.preventDefault();
  };
  const lname = (e) => {
    setName({ ...name, lastName: e.target.value });
    e.preventDefault();
  };

  return (
    <div className="container">
      <form>
        <input type="text" value={name.firstName} onChange={fname} />
        <input type="text" value={name.lastName} onChange={lname} />
        <h1>Your firstname is - {name.firstName}</h1>
        <h1>Your lastname is - {name.lastName}</h1>
      </form>
    </div>
  );
}

export default Index;
