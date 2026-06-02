"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    } else if (user.role !== "ADMIN") {
      router.push("/");
    }
  }, [user, router]);

  if (!user || user.role !== "ADMIN") return null;

  return (
    <div className="admin-container">
      <aside className="sidebar">
        <h2 className="logo">E Choices</h2>

        <nav>
          <Link href="/admin">Dashboard</Link>
          <Link href="/admin/jobs">Jobs</Link>
          <Link href="/admin/applications">Applications</Link>
        </nav>

        <button
          onClick={() => {
            logout();
            router.push("/");
          }}
          className="logout-btn"
        >
          Logout
        </button>
      </aside>

      <main className="main">{children}</main>

      <style jsx>{`
        .admin-container {
          display: flex;
          min-height: 100vh;
          background: #f8f7f1;
        }

        .sidebar {
          width: 250px;
          background: #0d2b28;
          color: white;
          padding: 30px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .logo {
          margin-bottom: 30px;
        }

        nav {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        nav a {
          color: white;
          text-decoration: none;
          font-weight: 500;
          opacity: 0.8;
          transition: 0.3s;
        }

        nav a:hover {
          opacity: 1;
          transform: translateX(5px);
        }

        .logout-btn {
          background: #2ec4b6;
          border: none;
          padding: 10px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
        }

        .main {
          flex: 1;
          padding: 40px;
        }
      `}</style>
    </div>
  );
}