import React, { useState, useEffect, useMemo } from "react";
import Header from "../Header";
import ErrorComponent from "../ErrorComponent";
import Service from "../../service";

import "./app.css";

const App = () => {
  const api = useMemo(() => new Service(), []);

  const [apiData, setData] = useState({});
  const [errorMessage, setError] = useState("");

  useEffect(() => {
    api
      .requestData()
      .then((data) => setData(data))
      .catch((error) => setError(String(error)));
  }, [api]);

  function renderList(data) {
    if (data === undefined) {
      setData({});
      return;
    }

    const array = [];
    for (const key in data) {
      const title = data[key];
      for (const element in title) {
        array.push(`${title[element]}`);
      }
    }

    return array.map((item, index) => {
      return <li key={index}>{item}</li>;
    });
  }

  return (
    <div className="app">
      <Header />
      <ErrorComponent errorMessage={errorMessage} />
      <ul>{renderList(apiData)}</ul>
    </div>
  );
};

export default App;
