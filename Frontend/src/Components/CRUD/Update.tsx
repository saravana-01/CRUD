import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

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

export const Update = (props: Props) => {
  const [edit, setEdit] = useState<FormData>({
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

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetch = () => {
      axios
        .get(`http://localhost:5000/api/v1/getUsers/${id}`)
        .then((res) => {
          setEdit(res.data);
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    };
    fetch();
  }, []);
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setEdit((pre) => ({ ...pre, [name]: value }));
  };

  const handleClick = (e: any) => {
    e.preventDefault();
    let valid = true;
    if (!edit.name) {
      setError((err) => ({ ...err, name: "Fill your Name" }));
      valid = false;
    } else {
      setError((err) => ({ ...err, name: "" }));
      //   valid = true;
    }
    if (!edit.age) {
      setError((err) => ({ ...err, age: "Fill your Age" }));
      valid = false;
    } else {
      setError((err) => ({ ...err, age: "" }));
      //   valid = true;
    }
    if (!edit.email) {
      setError((err) => ({ ...err, email: "Fill your Mail" }));
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
  const handleSubmit = async () => {
    // e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/v1/updateUsers/${id}`, edit);
      alert("User updated ");
      navigate("/read");
    } catch (err) {
      console.log(err);
      // setApiErr(err)
      alert("failed");
    }
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
        <div className="form mt-5 container d-flex justify-content-center p-5">
          <div className="card" style={{ width: "50%" }}>
            <div className="card-body">
               <form onSubmit={handleSubmit}>
            <div className="mb-3 w-100">
              <label className="form-label ">Name</label>
              <input
                type="text"
                className="form-control "
                id="formGroupExampleInput"
                placeholder="Enter Your Name"
                name="name"
                value={edit.name}
                onChange={handleChange}
              />
              {error.name && <span className="text-danger">{error.name}</span>}
            </div>
            <div className="mb-3">
              <label className="form-label">Age</label>
              <input
                type="text"
                name="age"
                value={edit.age}
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="Enter Your Age"
                onChange={handleChange}
              />
              {error.age && <span className="text-danger">{error.age}</span>}
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="text"
                name="email"
                value={edit.email}
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
              Update
            </button>
          </form>
            </div>
          </div>
         
        </div>
      </div>
    </>
  );
};
