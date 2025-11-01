import React from "react";
import { useSelector } from "react-redux";
import JobCard from "../components/JobCard";

export default function BookmarksPage() {
  const { bookmarks } = useSelector((state) => state.jobs);

  return (
    <div className="mt-20 p-6 w-full h-screen">
      <h1 className="text-3xl font-bold mb-4 text-blue-500">Bookmarked Jobs</h1>
      {bookmarks.length === 0 ? (
        <p className="text-blue-600">No bookmarks yet.</p>
      ) : (
        <div className="grid gap-4">
          {bookmarks.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
}
