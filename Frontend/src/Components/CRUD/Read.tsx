import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

type Props = {};
interface User {
  _id: string;
  name: string;
  age: number;
  email: string;
}

export const Read = (props: Props) => {
  const [users, setUsers] = useState<User[]>([]);
  const navigate = useNavigate();

  const getData = () => {
    axios
      .get("http://localhost:5000/api/v1/getUsers")
      .then((res) => {
        setUsers(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log("error", err));
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = (_id: string) => {
    axios
      .delete(`http://localhost:5000/api/v1/deleteUsers/${_id}`)
      .then(() => {
        console.log("user deleted");
        getData();
      })
      .catch((err) => {
        console.log("delete error", err);
      });
  };

  return (
    <div className="container">
      <div className="container mt-5">
        <h1 className="h1 text-secondary text-center">
          <strong className="text-primary">C</strong>reate{" "}
          <strong className="text-primary">R</strong>ead{" "}
          <strong className="text-primary">U</strong>pdate{" "}
          <strong className="text-primary">D</strong>elete -{" "}
          <strong className="text-primary">CRUD Application</strong>
        </h1>
      </div>
      <div className="container text-end mt-3">
        <button className="btn btn-primary " onClick={() => navigate("/")}>
          Add Users
        </button>
      </div>

      <div className=" container d-flex justify-content-center p-5">
        <div className="card" style={{ width: "70%" }}>
          <div className="card-body">
            {" "}
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Age</th>
                  <th scope="col">Mail</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {users?.map((user, index) => (
                  <tr key={index}>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>{user.email}</td>
                    <td>
                      <Link
                        to={`/update/${user._id}`}
                        className="btn btn-primary"
                      >
                        Edit
                      </Link>
                      <button
                        className="btn btn-danger mx-2"
                        onClick={() => handleDelete(user._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
