import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Jobs = () => {
  const Jobs = useLoaderData();

  return (
    <div>
      {Jobs.map((Job) => {
        return (
          <Link to={Job?.id?.toString()} key={Job.id} className="block">
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-100 transform hover:-translate-y-1">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    #{Job.id}
                  </span>
                  <span className="text-xs text-gray-500">Full-time</span>
                </div>

                <h4 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {Job.title}
                </h4>

                <div className="flex items-center text-gray-600 mb-3">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-sm">{Job.location}</span>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <button className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center">
                    View Details
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Jobs;

export const JobsLoader = async () => {
  const res = await fetch("http://localhost:3000/jobs");

if(!res.ok){
  throw Error("Could Not Found Job List")
}

  return res.json();
};
