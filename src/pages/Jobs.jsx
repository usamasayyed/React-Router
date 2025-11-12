import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Jobs = () => {
  const Jobs = useLoaderData();

  return (
    <div>
      {Jobs.map((Job) => {
        return (
          <Link key={Job.id}>
            <p>{Job.id}</p>
            <h4>{Job.title}</h4>
            <p>{Job.location}</p>
            <p>{Job.salary}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Jobs;

export const JobsLoader = async () => {
  const res = await fetch("http://localhost:3000/jobs");
  return res.json();
};
