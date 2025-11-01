import { createSlice } from "@reduxjs/toolkit";
import jobsData from "../data/jobs.json";

const jobSlice = createSlice({
  name: "jobs",
  initialState: {
    allJobs: jobsData,
    filteredJobs: jobsData,
    bookmarks: [],
    searchTerm: "",
    filter: { company: "", location: "" },
    sortBy: "date",
  },
  reducers: {
    // 🔹 Search by title, company, or location
    searchJobs: (state, action) => {
      state.searchTerm = action.payload.toLowerCase();
      state.filteredJobs = state.allJobs.filter(
        (job) =>
          job.title.toLowerCase().includes(state.searchTerm) ||
          job.company.toLowerCase().includes(state.searchTerm) ||
          job.location.toLowerCase().includes(state.searchTerm)
      );
    },

    // 🔹 Filter by company & location (exact match)
    filterJobs: (state, action) => {
      const { company, location } = action.payload;
      state.filter = { company, location };
      state.filteredJobs = state.allJobs.filter((job) => {
        return (
          (company ? job.company.toLowerCase() === company.toLowerCase() : true) &&
          (location ? job.location.toLowerCase() === location.toLowerCase() : true)
        );
      });
    },

    // 🔹 Sort by salary or date
    sortJobs: (state, action) => {
      state.sortBy = action.payload;
      if (action.payload === "salary") {
        state.filteredJobs.sort((a, b) => b.salary - a.salary);
      } else if (action.payload === "date") {
        state.filteredJobs.sort(
          (a, b) => new Date(b.datePosted) - new Date(a.datePosted)
        );
      }
    },

    // 🔹 Toggle bookmarks
    toggleBookmark: (state, action) => {
      const job = action.payload;
      const exists = state.bookmarks.find((b) => b.id === job.id);
      if (exists) {
        state.bookmarks = state.bookmarks.filter((b) => b.id !== job.id);
      } else {
        state.bookmarks.push(job);
      }
    },
  },
});

export const { searchJobs, filterJobs, sortJobs, toggleBookmark } =
  jobSlice.actions;
export default jobSlice.reducer;
