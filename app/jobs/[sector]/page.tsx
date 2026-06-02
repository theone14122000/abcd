"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import JobsHero from "@/components/jobs/JobsHero";
import JobsFeatured from "@/components/jobs/JobsFeatured";
import JobsCTA from "@/components/jobs/JobsCTA";
import { Job } from "@/components/jobs/JobCard";

const SECTOR_SLUG_TO_ID: Record<string, string> = {
  "it-technologies": "IT",
  bpo: "BPO",
  finance: "FINANCE",
  manufacturing: "MANUFACTURING",
  sale: "SALES",
  health: "HEALTH",
};

const SECTOR_ID_TO_LABEL: Record<string, string> = {
  IT: "IT & Technologies",
  BPO: "BPO",
  FINANCE: "Finance",
  MANUFACTURING: "Manufacturing",
  SALES: "Sales",
  HEALTH: "Health",
};

export default function SectorJobsPage() {
  const { user } = useAuth();
  const params = useParams<{ sector: string }>();
  const sectorSlug = params?.sector;

  const sectorId = useMemo(() => {
    if (!sectorSlug) return null;
    return SECTOR_SLUG_TO_ID[sectorSlug.toLowerCase()] ?? null;
  }, [sectorSlug]);

  const [jobs, setJobs] = useState<Job[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("/api/jobs", {
          cache: "no-store",
        });

        const data = await res.json();

        if (Array.isArray(data)) {
          setJobs(data);
        } else {
          setJobs([]);
        }
      } catch (error) {
        console.error("Failed to fetch jobs:", error);
        setJobs([]);
      }
    };

    fetchJobs();
  }, []);

  const filteredJobs = useMemo(() => {
    const query = search.toLowerCase();

    return jobs.filter((job) => {
      const matchesQuery =
        job.title.toLowerCase().includes(query) ||
        job.company.toLowerCase().includes(query) ||
        job.location.toLowerCase().includes(query) ||
        job.type.toLowerCase().includes(query) ||
        job.description.toLowerCase().includes(query) ||
        job.sector.toLowerCase().includes(query);

      const matchesSector = sectorId ? job.sector === sectorId : true;

      return matchesQuery && matchesSector;
    });
  }, [jobs, search, sectorId]);

  const sectionTitle = sectorId
    ? SECTOR_ID_TO_LABEL[sectorId] ?? "Jobs"
    : "Jobs";

  return (
    <>
      <JobsHero search={search} setSearch={setSearch} />

      <main style={{ background: "#f4f1e8" }}>
        <JobsFeatured
          jobs={filteredJobs}
          sectionTitle={sectionTitle}
        />
      </main>

      <JobsCTA />
    </>
  );
}