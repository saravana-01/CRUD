import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

type Props = {};

interface datas {
  name: string;
  age: string;
  city: string;
}

export const Practice = (props: Props) => {
  const navigate = useNavigate();
  const [name, setName] = useState<datas>({
    name: "",
    age: "",
    city: "",
  });
  const handleChange = (e: any) => {
    const { value, name } = e.target;
    setName((prvidata) => ({ ...prvidata, [name]: value }));
  };
  // const handleSubmit = (e:any) => {
  //   e.preventDefault();
  //   navigate('/')
  // };
  const handleClick = () => {
    let valid: any = true;
    if (!name.name) {
      alert("fill the name");
      valid = false;
    }
    if (!name.age) {
      alert("fill the age");
      valid = false;
    }
    if (!name.city) {
      alert("fill the city");
      valid = false;
    }
    if ((valid = true)) {
      // handleSubmit();
    }
  };
  return (
    <>
      <section className="useState">
        {" "}
        <form
        // onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            placeholder="Age"
            name="age"
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            placeholder="City"
            name="city"
            onChange={handleChange}
          />
          <button onClick={handleClick}>Submit</button>
        </form>
        <p>{name.name}</p>
        <p>{name.age}</p>
        <p>{name.city}</p>
      </section>
      <section className="useeffect">
        
      </section>
    </>
  );
};
