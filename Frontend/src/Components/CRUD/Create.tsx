import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {};
interface FormData {
  name: string;
  age: string;
  email: string;
}
interface FormError {
  name: string;
  age: string;
  email: string;
}

export default function ({}: Props) {
  const [data, setData] = useState<FormData>({
    name: "",
    age: "",
    email: "",
  });
  const [error, setError] = useState<FormError>({
    name: "",
    age: "",
    email: "",
  });
  const [apiErr, setApiErr] = useState();
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setData((previdata) => ({ ...previdata, [name]: value }));
  };
  const handleClick = (e: any) => {
    e.preventDefault();
    let valid = true;
    let errors = { name: "", age: "", email: "" };
    if (!data.name) {
      setError((err) => ({ ...err, name: "Enter your Name" }));
      valid = false;
    } else {
      setError((err) => ({ ...err, name: "" }));
      //   valid = true;
    }
    if (!data.age) {
      setError((err) => ({ ...err, age: "Enter your Age" }));
      valid = false;
    } else {
      setError((err) => ({ ...err, age: "" }));
      //   valid = true;
    }
    if (!data.email) {
      setError((err) => ({ ...err, email: "Enter your Mail" }));
      valid = false;
    } else {
      setError((err) => ({ ...err, email: "" }));
      //   valid = true;
    }
    if (valid == true) {
      handleSubmit();
      // alert();
      // console.log("data post");
    }
  };
  const handleSubmit = () => {
    axios
      .post("http://localhost:5000/api/v1/createUsers", data)
      .then((response) => {
        console.log("reponse:", response.data);
        alert("User added");
        navigate("/read");
      })
      .catch((err) => {
        console.log("err", err);
        setApiErr(err.response.data.message);
      });
  };

  return (
    <>
      <div className="container">
        <div className="container mt-5">
          {" "}
          <h1 className="h1 text-secondary text-center">
            <strong className="text-primary">C</strong>reate{" "}
            <strong className="text-primary">R</strong>ead{" "}
            <strong className="text-primary">U</strong>pdate{" "}
            <strong className="text-primary">D</strong>elete -{" "}
            <strong className="text-primary">CRUD Application</strong>
          </h1>
        </div>
        <div className="container text-end mt-3">
          <button
            className="btn btn-primary "
            onClick={() => navigate("/read")}
          >
            View Users
          </button>
        </div>
        <div className="form  container d-flex justify-content-center p-5">
          <div className="card" style={{width:"50%"}}>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control "
                    id="formGroupExampleInput"
                    placeholder="Enter Your Name"
                    name="name"
                    onChange={handleChange}
                  />
                  {error.name && (
                    <span className="text-danger">{error.name}</span>
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label">Age</label>
                  <input
                    type="text"
                    name="age"
                    className="form-control"
                    id="formGroupExampleInput2"
                    placeholder="Enter Your Age"
                    onChange={handleChange}
                  />
                  {error.age && (
                    <span className="text-danger">{error.age}</span>
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="text"
                    name="email"
                    onChange={handleChange}
                    className="form-control"
                    id="formGroupExampleInput2"
                    placeholder="Enter Your Email"
                  />
                  {error.email && (
                    <span className="text-danger">{error.email}</span>
                  )}
                </div>
                <button
                  type="submit"
                  className="btn btn-primary mt-3 d-flex justify-content-center"
                  onClick={handleClick}
                >
                  Submit
                </button>
                <span className="text-danger">{apiErr}</span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
