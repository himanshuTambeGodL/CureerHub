import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleBookmark } from "../redux/jobSlice";

export default function JobCard({ job }) {
  const dispatch = useDispatch();
  const bookmarks = useSelector((state) => state.jobs.bookmarks);
  const isBookmarked = bookmarks.some((b) => b.id === job.id);

  return (
    <div className="relative flex flex-col isolate w-full h-40 bg-[#29292c] rounded-2xl overflow-hidden font-sans text-base group transition-transform duration-300 hover:scale-[1.02] shadow-lg">
      {/* Inner dark background */}
      <div className="absolute inset-[0.0625rem] rounded-[0.9375rem] bg-[#18181b] z-[2]" />

      {/* Left gradient bar */}
      <div className="absolute w-1 inset-y-[0.65rem] left-[0.5rem] rounded-sm bg-gradient-to-b from-[#2eadff] via-[#3d83ff] to-[#7e61ff] transition-transform duration-300 ease-in-out z-[4] group-hover:translate-x-[0.15rem]" />

      {/* Job Info */}
      <div className=" relative z-[5] flex flex-col justify-between h-full px-6 py-4">
        <div>
          <h2 className="text-[#32a6ff] text-lg font-semibold transition-transform duration-300 ease-in-out group-hover:translate-x-[0.15rem]">
            {job.title}
          </h2>
          <p className="text-[#99999d] transition-transform duration-300 ease-in-out group-hover:translate-x-[0.25rem]">
            {job.company} — {job.location}
          </p>
          <p className="text-gray-400 text-sm mt-1">
            💰 ₹{job.salary} | 📅 {job.datePosted}
          </p>
        </div>

        {/* Bookmark Button */}
        <button
          onClick={() => dispatch(toggleBookmark(job))}
          className={`mt-2 px-3 py-1 rounded-md text-sm font-medium transition-all duration-300 ease-in-out ${
            isBookmarked
              ? "bg-blue-600 text-black shadow-md"
              : "bg-gray-700 text-white hover:bg-gray-600"
          }`}
        >
          {isBookmarked ? "★ Bookmarked" : "☆ Bookmark"}
        </button>
      </div>

      {/* Glow Effects */}
      <div className="absolute w-[20rem] h-[20rem] bg-[radial-gradient(circle_closest-side_at_center,white,transparent)] opacity-0 transition-opacity duration-300 ease-in-out z-[3] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-10" />
      <div className="absolute w-[20rem] h-[20rem] bg-[radial-gradient(circle_closest-side_at_center,white,transparent)] opacity-0 transition-opacity duration-300 ease-in-out z-[1] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-10" />
    </div>
  );
}
