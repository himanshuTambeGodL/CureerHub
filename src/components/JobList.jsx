import React from "react";
import { useSelector } from "react-redux";
import JobCard from "./JobCard";

export default function JobList() {
  const { filteredJobs } = useSelector((state) => state.jobs);

  return (
    <div className="grid gap-4">
      {filteredJobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}
