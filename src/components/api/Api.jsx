import React from "react";

export const fetchJsonData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log("data", data);
};
fetchJsonData();
const Api = () => {
  return (
    <div>
      <h1>API mocking</h1>
    </div>
  );
};

export default Api;
