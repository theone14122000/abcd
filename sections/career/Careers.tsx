import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../lib/auth";

export function Careers() {
  const { user, demoMode } = useAuth();
  const location = useLocation();

  const openPositions = [
    {
      title: "Senior HR Executive",
      location: "New Delhi • Hybrid",
      type: "Full-time",
      tags: ["HR", "Talent Acquisition", "6+ yrs"],
    },
    {
      title: "IT Recruiter",
      location: "Remote",
      type: "Full-time",
      tags: ["IT", "Recruitment", "3+ yrs"],
    },
    {
      title: "Business Development Manager",
      location: "Mumbai • On-site",
      type: "Full-time",
      tags: ["Sales", "B2B", "5+ yrs"],
    },
    {
      title: "Frontend Engineer (React)",
      location: "Remote",
      type: "Contract",
      tags: ["Engineering", "React", "4+ yrs"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-50/40 via-white to-white">
      <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white/70 px-6 backdrop-blur sm:px-10">
        <Link to="/" className="text-xl font-bold tracking-tight text-brand-800">
          E Choices
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          <Link to="/" className="transition-colors hover:text-brand-700">Home</Link>
          <Link to="/services" className="transition-colors hover:text-brand-700">Services</Link>
          <span className="font-semibold text-brand-800">Careers</span>
          <span className="text-sm text-slate-500">
            Hi, <span className="font-medium text-slate-800">{user?.name}</span>
          </span>
          <Link to="/careers" className="rounded-full border border-brand-700 px-5 py-1.5 text-brand-800 hover:bg-brand-50">
            View Jobs
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-16 text-center sm:py-24">
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-800">
          <span className="h-2 w-2 rounded-full bg-brand-500" />
          {openPositions.length} open positions
          {demoMode && (
            <span className="ml-2 rounded-full bg-amber-100 px-2 py-0.5 text-[10px] text-amber-800">
              Demo mode
            </span>
          )}
        </div>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
          Build the next chapter <br />
          <span className="text-brand-700">with E Choices</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
          We&apos;re hiring curious, driven people. Welcome back,{" "}
          <span className="font-semibold text-slate-900">{user?.name}</span>.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-500">
          <span>Path:</span>
          <code className="rounded bg-slate-100 px-2 py-0.5 font-mono">{location.pathname}</code>
          <span>•</span>
          <span>Authenticated</span>
          <svg className="h-4 w-4 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
      </section>

      {/* Jobs */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-4 sm:grid-cols-2">
          {openPositions.map((job) => (
            <div
              key={job.title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-brand-300 hover:shadow-lg hover:shadow-brand-100"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 group-hover:text-brand-700">
                    {job.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">{job.location}</p>
                </div>
                <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
                  {job.type}
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {job.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-xs text-slate-600"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex items-center justify-between">
                <span className="text-xs text-slate-500">Apply with your profile</span>
                <button className="inline-flex items-center gap-1 text-sm font-medium text-brand-700 hover:text-brand-900">
                  Apply now
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 rounded-xl border border-brand-100 bg-brand-50/60 p-4 text-sm text-brand-900">
          <strong>Placeholder:</strong> the full careers page (positions from the DB,
          applications, resume uploads) will be wired up in the next sprint. This
          page is currently shown only to authenticated users — unauthenticated
          visitors are redirected to the login page.
        </p>
      </section>
    </div>
  );
}
