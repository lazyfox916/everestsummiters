"use client";

import {
  Users,
  FolderKanban,
  FileText,
  Heart,
  TrendingUp,
} from "lucide-react";
import { projects, blogPosts } from "@/data/AdminData";

const iconMap = {
  users: Users,
  folder: FolderKanban,
  "file-text": FileText,
  heart: Heart,
};

export default function DashboardView({ members }) {
  const recentMembers = members.slice(-4).reverse();
  const activeProjects = projects.filter((p) => p.status !== "completed").slice(0, 3);
  const activeCount = members.filter((m) => m.status === "active").length;

  const stats = [
    {
      label: "Total Members",
      value: String(members.length),
      change: `${activeCount} active`,
      icon: "users",
    },
    {
      label: "Active Projects",
      value: String(activeProjects.length),
      change: `of ${projects.length}`,
      icon: "folder",
    },
    {
      label: "Blog Posts",
      value: String(blogPosts.length),
      change: `${blogPosts.filter((p) => p.status === "published").length} published`,
      icon: "file-text",
    },
    {
      label: "Donations (NPR)",
      value: "\u20A8 1.2M",
      change: "+18%",
      icon: "heart",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-heading text-2xl font-semibold text-gray-900">
          Dashboard
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Welcome back. Here&apos;s what&apos;s happening with the club.
        </p>
      </div>

      {/* Stats grid */}
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = iconMap[stat.icon];
          return (
            <div
              key={stat.label}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy/8">
                  {Icon && <Icon className="h-5 w-5 text-navy" />}
                </div>
                <span className="flex items-center gap-0.5 rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700">
                  <TrendingUp className="h-3 w-3" />
                  {stat.change}
                </span>
              </div>
              <p className="mt-4 text-2xl font-bold text-gray-900">
                {stat.value}
              </p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          );
        })}
      </div>

      {/* Two-column section */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Members */}
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
            <h3 className="font-heading text-base font-semibold text-gray-900">
              Recent Members
            </h3>
            <span className="text-xs text-gray-400">
              {members.length} total
            </span>
          </div>
          <div className="divide-y divide-gray-50">
            {recentMembers.map((m) => (
              <div key={m.id} className="flex items-center gap-3 px-5 py-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent">
                  {m.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-gray-900">
                    {m.name}
                  </p>
                  <p className="text-xs text-gray-500">{m.role}</p>
                </div>
                <span className="text-xs tabular-nums text-gray-400">
                  {m.summits} summits
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Active Projects */}
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
            <h3 className="font-heading text-base font-semibold text-gray-900">
              Active Projects
            </h3>
            <span className="text-xs text-gray-400">
              {activeProjects.length} active
            </span>
          </div>
          <div className="divide-y divide-gray-50">
            {activeProjects.map((p) => (
              <div key={p.id} className="px-5 py-3.5">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-sm font-medium text-gray-900">{p.name}</p>
                  <StatusBadge status={p.status} />
                </div>
                <div className="mt-1.5 flex items-center gap-3 text-xs text-gray-500">
                  <span>{p.lead}</span>
                  <span className="text-gray-300">|</span>
                  <span>{p.budget}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent blog posts */}
      <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
          <h3 className="font-heading text-base font-semibold text-gray-900">
            Recent Posts
          </h3>
          <span className="text-xs text-gray-400">
            {blogPosts.length} posts
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 text-left text-xs font-medium uppercase tracking-wider text-gray-400">
                <th className="px-5 py-3">Title</th>
                <th className="px-5 py-3">Author</th>
                <th className="px-5 py-3">Date</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3 text-right">Views</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {blogPosts.slice(0, 4).map((post) => (
                <tr key={post.id} className="hover:bg-gray-50/50">
                  <td className="px-5 py-3 font-medium text-gray-900">
                    {post.title}
                  </td>
                  <td className="px-5 py-3 text-gray-500">{post.author}</td>
                  <td className="px-5 py-3 text-gray-500">{post.date}</td>
                  <td className="px-5 py-3">
                    <StatusBadge status={post.status} />
                  </td>
                  <td className="px-5 py-3 text-right tabular-nums text-gray-500">
                    {post.views.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function StatusBadge({ status }) {
  const styles = {
    active: "bg-emerald-50 text-emerald-700",
    inactive: "bg-gray-100 text-gray-600",
    "in-progress": "bg-blue-50 text-blue-700",
    planning: "bg-amber-50 text-amber-700",
    completed: "bg-emerald-50 text-emerald-700",
    published: "bg-emerald-50 text-emerald-700",
    draft: "bg-gray-100 text-gray-600",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium capitalize ${
        styles[status] || "bg-gray-100 text-gray-600"
      }`}
    >
      {status.replace("-", " ")}
    </span>
  );
}
