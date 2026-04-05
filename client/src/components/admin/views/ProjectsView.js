"use client";

import { useState } from "react";
import { Search, Plus, Calendar, User } from "lucide-react";
import { projects } from "@/data/AdminData";

const statusStyles = {
  "in-progress": "bg-blue-50 text-blue-700 border-blue-200",
  planning: "bg-amber-50 text-amber-700 border-amber-200",
  completed: "bg-emerald-50 text-emerald-700 border-emerald-200",
};

export default function ProjectsView() {
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const filtered = projects.filter((p) => {
    const matchesSearch = p.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesStatus =
      filterStatus === "all" || p.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-heading text-2xl font-semibold text-gray-900">
            Projects
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Track and manage club projects and initiatives.
          </p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-lg bg-brand px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-brand/90">
          <Plus className="h-4 w-4" />
          New Project
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-gray-200 bg-white py-2.5 pl-10 pr-4 text-sm text-gray-900 placeholder:text-gray-400 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          />
        </div>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-700 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
        >
          <option value="all">All Status</option>
          <option value="in-progress">In Progress</option>
          <option value="planning">Planning</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      {/* Project cards */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {filtered.map((p) => (
          <div
            key={p.id}
            className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-sm font-semibold text-gray-900 leading-snug">
                {p.name}
              </h3>
              <span
                className={`shrink-0 rounded-full border px-2 py-0.5 text-xs font-medium capitalize ${
                  statusStyles[p.status] || "bg-gray-100 text-gray-600 border-gray-200"
                }`}
              >
                {p.status.replace("-", " ")}
              </span>
            </div>

            <div className="mt-4 space-y-2 text-xs text-gray-500">
              <div className="flex items-center gap-2">
                <User className="h-3.5 w-3.5" />
                <span>{p.lead}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-3.5 w-3.5" />
                <span>Deadline: {p.deadline}</span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
              <span className="text-sm font-semibold text-gray-900">
                {p.budget}
              </span>
              <button className="text-xs font-medium text-accent hover:text-accent/80">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="rounded-xl border border-gray-200 bg-white px-5 py-12 text-center text-sm text-gray-400">
          No projects found matching your criteria.
        </div>
      )}
    </div>
  );
}
