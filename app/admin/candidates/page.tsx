"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

interface CandidateSubmission {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  positionApplied: string;
  currentLocation: string;
  currentCTC: string;
  expectedCTC: string;
  resumeUrl: string;
  status: string;
  source: string;
  createdAt: string;
}

export default function CandidatesPage() {
  const [candidates, setCandidates] = useState<CandidateSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<"PENDING" | "REVIEWED" | "REJECTED" | "ALL">("PENDING");

  useEffect(() => {
    fetchCandidates();
  }, [filter]);

  const fetchCandidates = async () => {
    try {
      const query = filter === "ALL" ? "" : `?status=${filter}`;
      const res = await fetch(`/api/admin/candidates${query}`);
      const data = await res.json();
      setCandidates(data);
    } catch (error) {
      console.error("Failed to fetch candidates:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, newStatus: string) => {
    try {
      const res = await fetch(`/api/admin/candidates/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (res.ok) {
        setCandidates((prev) =>
          prev.map((c) => (c.id === id ? { ...c, status: newStatus } : c))
        );
      }
    } catch (error) {
      console.error("Failed to update status:", error);
    }
  };

  if (loading) return <div className="p-8">Loading...</div>;

  return (
    <div className="p-8 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Candidate Submissions</h1>
          <p className="text-slate-600 mt-2">Manage direct applications from the hero form</p>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-4 mb-8 border-b border-slate-200">
          {["PENDING", "REVIEWED", "REJECTED", "ALL"].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status as any)}
              className={`px-4 py-2 font-medium transition-colors ${
                filter === status
                  ? "text-brand-600 border-b-2 border-brand-600"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {status}
              {" "}
              {candidates.filter((c) => (status === "ALL" ? true : c.status === status)).length}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-600 uppercase">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-600 uppercase">Position</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-600 uppercase">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-600 uppercase">CTC</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-600 uppercase">Resume</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-600 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-600 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {candidates.map((candidate) => (
                <tr key={candidate.id} className="hover:bg-slate-50 transition">
                  <td className="px-6 py-4 text-sm font-medium text-slate-900">{candidate.fullName}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{candidate.positionApplied}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{candidate.email}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">
                    {candidate.currentCTC} → {candidate.expectedCTC}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <a
                      href={candidate.resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-600 hover:underline"
                    >
                      View
                    </a>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        candidate.status === "PENDING"
                          ? "bg-yellow-100 text-yellow-800"
                          : candidate.status === "REVIEWED"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {candidate.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm space-x-2">
                    <button
                      onClick={() => updateStatus(candidate.id, "REVIEWED")}
                      className="text-blue-600 hover:underline"
                    >
                      Review
                    </button>
                    <button
                      onClick={() => updateStatus(candidate.id, "REJECTED")}
                      className="text-red-600 hover:underline"
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {candidates.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-600">No candidates found</p>
          </div>
        )}
      </div>
    </div>
  );
}