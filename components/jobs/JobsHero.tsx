"use client";

import React, { useState } from "react";
import CandidateSubmissionForm from "./CandidateSubmissionForm";

interface JobsHeroProps {
  search?: string;
  setSearch?: React.Dispatch<React.SetStateAction<string>>;
}

export default function JobsHero({ search, setSearch }: JobsHeroProps) {
  const [internalSearch, setInternalSearch] = useState("");

  const searchValue = search ?? internalSearch;
  const updateSearch = setSearch ?? setInternalSearch;

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Search is already controlled by searchValue/updateSearch.
    // Existing page filtering will work through setSearch.
  };

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-brand-950">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-brand-600/20 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-15%] right-[-5%] w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute top-[40%] left-[50%] w-[300px] h-[300px] bg-brand-500/10 rounded-full blur-[80px]" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center min-h-[85vh]">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-8 animate-fade-in-left">
            {/* Badge */}
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-brand-500/15 text-brand-300 border border-brand-500/25 backdrop-blur-md uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-400" />
                </span>
                Opportunities Await
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
              Your Next Career{" "}
              <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-brand-400 via-brand-300 to-purple-400 bg-clip-text text-transparent">
                Milestone
              </span>
              <br />
              <span className="relative inline-block">
                Starts Here
                <svg
                  className="absolute -bottom-2 left-0 w-full text-brand-500/60"
                  viewBox="0 0 200 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 8C50 2 150 2 198 8"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-white/60 max-w-xl leading-relaxed">
              Discover premium career opportunities across top companies.
              Your expertise deserves the right platform — connect with leading
              employers today.
            </p>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="max-w-xl">
              <div className="flex flex-col sm:flex-row gap-3 p-1.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-xl shadow-black/20">
                <div className="relative flex-1">
                  <svg
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>

                  <input
                    type="text"
                    placeholder="Search roles, skills, or companies..."
                    value={searchValue}
                    onChange={(e) => updateSearch(e.target.value)}
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-transparent text-white placeholder-white/40 focus:outline-none focus:ring-0 text-sm md:text-base"
                  />
                </div>

                <button
                  type="submit"
                  className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white font-semibold shadow-lg shadow-brand-500/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-sm md:text-base whitespace-nowrap"
                >
                  Search Jobs
                </button>
              </div>
            </form>

            {/* Stats */}
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[
                    "bg-brand-500",
                    "bg-purple-500",
                    "bg-emerald-500",
                    "bg-amber-500",
                  ].map((color, i) => (
                    <div
                      key={i}
                      className={`w-8 h-8 rounded-full ${color} border-2 border-slate-900 flex items-center justify-center text-white text-xs font-bold`}
                    >
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">2,500+</p>
                  <p className="text-white/40 text-xs">Active Candidates</p>
                </div>
              </div>

              <div className="w-px h-10 bg-white/10" />

              <div>
                <p className="text-white font-semibold text-sm">150+</p>
                <p className="text-white/40 text-xs">Partner Companies</p>
              </div>

              <div className="w-px h-10 bg-white/10" />

              <div>
                <p className="text-white font-semibold text-sm">98%</p>
                <p className="text-white/40 text-xs">Placement Rate</p>
              </div>
            </div>
          </div>

          {/* Right Candidate Submission Form */}
          <div className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none lg:mx-0">
            <CandidateSubmissionForm />
          </div>
        </div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 80L48 69.3C96 58.7 192 37.3 288 29.3C384 21.3 480 26.7 576 34.7C672 42.7 768 53.3 864 53.3C960 53.3 1056 42.7 1152 37.3C1248 32 1344 32 1392 32L1440 32V80H1392C1344 80 1248 80 1152 80C1056 80 960 80 864 80C768 80 672 80 576 80C480 80 384 80 288 80C192 80 96 80 48 80H0Z"
            fill="currentColor"
            className="text-[#f4f1e8]"
          />
        </svg>
      </div>
    </section>
  );
}