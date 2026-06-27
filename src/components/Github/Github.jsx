import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/jatinagrahari")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);

  const data = useLoaderData();

  return (
    <div className="bg-gray-600 text-3xl m-4 text-white p-10 text-center">
      Github: {data.name}
      <img
        src={data.avatar_url}
        alt="Git Picture"
        className=" rounded-full w-xs p-10"
      />
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/jatinagrahari");
  return response.json();
};
