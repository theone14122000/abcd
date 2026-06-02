"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
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

export default function PrivateJobsPage() {
  const { user } = useAuth();
  const router = useRouter();

  const [jobs, setJobs] = useState<Job[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!user) router.push("/login");
  }, [user, router]);

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

  // SAFE FILTERING
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

  if (!user) return null;

  return (
    <>
      <JobsHero search={search} setSearch={setSearch} />

      <main style={{ background: "#f4f1e8" }}>
        {SECTORS.map((sector) => {
          // CASE-INSENSITIVE MATCHING
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
    </>
  );
}