import React from "react";
import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const JobDetails = useLoaderData();
  console.log(JobDetails);

  return (
    <div className="flex justify-center pt-3">
    <div className="bg-white rounded-7g shadow-xl p-6 max-w-md ">
      <p className="mb-4">
        <b className="text-gray-700 font-semibold">Job title : </b>
        <span className="text-gray-900 font-medium">{JobDetails.title}</span>
      </p>
      <p className="mb-4">
        <b className="text-gray-700 font-semibold">Job location : </b>
        <span className="text-gray-900">{JobDetails.location}</span>
      </p>
      <p className="mb-4">
        <b className="text-gray-700 font-semibold">Job salary : </b>
        <span className="text-green-600 font-semibold">
          {JobDetails.salary}
        </span>
      </p>
      <p className="mb-4 flex items-start">
        <b className="text-gray-700 font-semibold w-20">Job title :</b>
        <span className="text-gray-900 font-medium flex-1">
          {JobDetails.description}
        </span>
      </p>

      <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 block mx-auto rounded-lg transition duration-200 ease-in-out transform hover:scale-105">
        Apply Now
      </button>
    </div>
    </div>
  );
};

export default JobDetails;

export const JobDetailsLoder = async ({ params }) => {
  const { id } = params;

  const res = await fetch("http://localhost:3000/jobs/" + id);
if(!res.ok){
  throw Error("Could Not found job details")
}
  return res.json();
};
