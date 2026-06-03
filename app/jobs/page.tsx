"use client";

import { useEffect, useState } from "react";
import JobsHero from "@/components/jobs/JobsHero";
import JobsFeatured from "@/components/jobs/JobsFeatured";
import JobsCTA from "@/components/jobs/JobsCTA";
import { Job } from "@/components/jobs/JobCard";

const SECTORS = [
  { id: "HEALTH", label: "Health" },
  { id: "SALES", label: "Sales" },
  { id: "MANUFACTURING", label: "Manufacturing" },
  { id: "IT", label: "IT & Technologies" },
  { id: "BPO", label: "BPO" },
  { id: "FINANCE", label: "Finance" },
];

export default function PublicJobsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("/api/jobs", { cache: "no-store" });
        const data = await res.json();
        setJobs(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Failed to fetch jobs:", error);
        setJobs([]);
      }
    };
    fetchJobs();
  }, []);

  // SAFE FILTERING: Prevents crashes if a job field is missing
  const filteredJobs = jobs.filter((job) => {
    const query = search.toLowerCase();

    const title = job.title?.toLowerCase() || "";
    const company = job.company?.toLowerCase() || "";
    const location = job.location?.toLowerCase() || "";
    const type = job.type?.toLowerCase() || "";
    const description = job.description?.toLowerCase() || "";
    const sector = job.sector?.toLowerCase() || "";

    return (
      title.includes(query) ||
      company.includes(query) ||
      location.includes(query) ||
      type.includes(query) ||
      description.includes(query) ||
      sector.includes(query)
    );
  });

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "100vw",
        overflowX: "hidden",
        position: "relative",
      }}
    >
      <JobsHero search={search} setSearch={setSearch} />

      <main
        style={{
          background: "#f4f1e8",
          width: "100%",
          overflowX: "hidden",
        }}
      >
        {SECTORS.map((sector) => {
          // CASE-INSENSITIVE MATCHING: Matches "IT", "it", "It", etc.
          const sectorJobs = filteredJobs.filter(
            (job) => job.sector?.toUpperCase() === sector.id
          );

          return (
            <JobsFeatured
              key={sector.id}
              jobs={sectorJobs}
              sectionTitle={sector.label}
            />
          );
        })}
      </main>

      <JobsCTA />
    </div>
  );
}
