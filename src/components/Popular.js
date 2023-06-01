import React, { useEffect, useState } from "react";

const Popular = () => {
  const [backendData, setBackendData] = useState([]);
  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  console.log("HELLO1", backendData);

  return <section id={"popular"}>hi</section>;
};

export default Popular;
