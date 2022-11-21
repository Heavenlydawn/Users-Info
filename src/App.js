import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const UsingFetch = () => {
  const [users, setUsers] = useState([]);

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-100  p-10">
    <h1 className= "text-7xl font-bold" >USERS INFORMATION</h1>
      {users.length > 0 && (
        <div className="flex gap-20 flex-wrap items-center justify-center my-10">
          {users.map((user) => (
            <div className="p-10 bg-red-500 hover:bg-red-300 rounded-lg text-lg">
              <p><strong>{user.name}</strong> </p>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
              <p> Website: {user.website}</p>
              <p> Address: {user.address.city}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UsingFetch;
