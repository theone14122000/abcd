"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import JobsHero from "@/components/jobs/JobsHero";
import JobsFeatured from "@/components/jobs/JobsFeatured";
import JobsCTA from "@/components/jobs/JobsCTA";
import { Job } from "@/components/jobs/JobCard";

const SECTORS = [
  {
    id: "HEALTH",
    label: "Health",
  },
  {
    id: "SALES",
    label: "Sales",
  },
  {
    id: "MANUFACTURING",
    label: "Manufacturing",
  },
  {
    id: "IT",
    label: "IT & Technologies",
  },
  {
    id: "BPO",
    label: "BPO",
  },
  {
    id: "FINANCE",
    label: "Finance",
  },
];

export default function PrivateJobsPage() {
  const { user } = useAuth();
  const router = useRouter();

  const [jobs, setJobs] = useState<Job[]>([]);
  const [search, setSearch] = useState("");

  // Protect this page - redirect if not logged in
  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

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

  const filteredJobs = jobs.filter((job) => {
    const query = search.toLowerCase();

    return (
      job.title.toLowerCase().includes(query) ||
      job.company.toLowerCase().includes(query) ||
      job.location.toLowerCase().includes(query) ||
      job.type.toLowerCase().includes(query) ||
      job.description.toLowerCase().includes(query) ||
      job.sector.toLowerCase().includes(query)
    );
  });

  // Show nothing while checking auth (prevents flash of content)
  if (!user) return null;

  return (
    <>
      <JobsHero search={search} setSearch={setSearch} />

      <main style={{ background: "#f4f1e8" }}>
        {SECTORS.map((sector) => {
          const sectorJobs = filteredJobs.filter(
            (job) => job.sector === sector.id
          );

          if (sectorJobs.length === 0) return null;

          return (
            <JobsFeatured
              key={sector.id}
              jobs={sectorJobs}
              // REMOVED: isLoggedIn={true}
              // JobCard now detects auth automatically via useAuth()
              // Since this page is protected, user will always be logged in here
              sectionTitle={sector.label}
            />
          );
        })}
      </main>

      <JobsCTA />
    </>
  );
}