import React, { useEffect, useState } from "react";

const Table = () => {
  //   let url = "https://jsonplaceholder.typicode.com/users";
  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);
  const [searchString, setSearchString] = useState("");
  useEffect(() => {
    const fetchJsonData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const jsonData = await response.json();
      const extractedData = jsonData
        .map(({ id, name, username }) => ({
          id,
          name,
          username,
        }))
        .slice(0, 5);
      setData(extractedData);
      //   console.log("jsonData", jsonData);
    };
    fetchJsonData();
  }, []);
  console.log("data", data);

  console.log("searchString", searchString);
  //   console.log("extractedData", extractedData);
  const handleSearch = () => {
    const target = searchString.trim();

    if (!target) {
      console.log("Search string is empty");
      return;
    }

    const targetNumber = parseInt(target, 10);

    if (isNaN(targetNumber)) {
      console.log("Invalid numeric search");
      return;
    }

    const results = data.filter((user) => user.id === targetNumber);
    console.log("results", results);
  };

  return (
    <div>
      <h1>Table Data</h1>
      <input
        value={searchString}
        onChange={(e) => {
          setSearchString(e.target.value);
          handleSearch();
        }}
      />
      <table>
        <tbody>
          <thead>
            <tr>
              <td>id</td>
              <td>name</td>
              <td>username</td>
            </tr>
          </thead>
          {data?.map((data) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
