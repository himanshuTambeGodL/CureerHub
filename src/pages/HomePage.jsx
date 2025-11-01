import React from "react";
import SearchFilterBar from "../components/SearchFilterBar";
import JobList from "../components/JobList";
import ScrollToTopButton from "../components/ScrollToTopButton";

export default function HomePage() {
  return (
    <div className="p-6  mt-10 md:mt-10 w-full h-full ">
      
      <SearchFilterBar />
      <JobList />
      <ScrollToTopButton/>
    </div>
  );
}
