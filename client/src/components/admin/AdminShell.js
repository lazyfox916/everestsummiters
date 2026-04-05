"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  FolderKanban,
  FileText,
  Heart,
  Settings,
  Menu,
  X,
  LogOut,
  Mountain,
  ChevronRight,
} from "lucide-react";
import { adminNavItems, members as defaultMembers } from "@/data/AdminData";
import useLocalStorage from "@/hooks/useLocalStorage";
import DashboardView from "./views/DashboardView";
import MembersView from "./views/MembersView";
import ProjectsView from "./views/ProjectsView";
import BlogView from "./views/BlogView";
import DonationsView from "./views/DonationsView";
import SettingsView from "./views/SettingsView";

const iconMap = {
  "layout-dashboard": LayoutDashboard,
  users: Users,
  "folder-kanban": FolderKanban,
  "file-text": FileText,
  heart: Heart,
  settings: Settings,
};

export default function AdminShell() {
  const [activeView, setActiveView] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [members, setMembers, hydrated] = useLocalStorage(
    "mesc-members",
    defaultMembers
  );

  const activeItem = adminNavItems.find((i) => i.key === activeView);

  function renderView() {
    switch (activeView) {
      case "dashboard":
        return <DashboardView members={members} />;
      case "members":
        return <MembersView members={members} setMembers={setMembers} />;
      case "projects":
        return <ProjectsView />;
      case "blog":
        return <BlogView />;
      case "donations":
        return <DonationsView />;
      case "settings":
        return <SettingsView />;
      default:
        return <DashboardView members={members} />;
    }
  }

  if (!hydrated) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-50">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-brand" />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] flex bg-gray-50">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-[101] bg-black/40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-[102] flex w-64 flex-col bg-navy text-white transition-transform duration-300 lg:static lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo area */}
        <div className="flex items-center gap-3 border-b border-white/10 px-5 py-5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand">
            <Mountain className="h-5 w-5" />
          </div>
          <div>
            <h1 className="font-heading text-base font-semibold leading-tight">
              MESC Admin
            </h1>
            <p className="text-xs text-white/50">Everest Summiters Club</p>
          </div>
        </div>

        {/* Nav items */}
        <nav className="flex-1 space-y-1 px-3 py-4">
          {adminNavItems.map((item) => {
            const Icon = iconMap[item.icon];
            const isActive = activeView === item.key;
            return (
              <button
                key={item.key}
                onClick={() => {
                  setActiveView(item.key);
                  setSidebarOpen(false);
                }}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                  isActive
                    ? "bg-white/15 text-white font-medium"
                    : "text-white/60 hover:bg-white/8 hover:text-white"
                }`}
              >
                {Icon && <Icon className="h-[18px] w-[18px]" />}
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Bottom section */}
        <div className="border-t border-white/10 px-3 py-4">
          <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-white/60 transition-colors hover:bg-white/8 hover:text-white">
            <LogOut className="h-[18px] w-[18px]" />
            Log Out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top bar */}
        <header className="flex items-center gap-4 border-b border-gray-200 bg-white px-5 py-3.5">
          <button
            onClick={() => setSidebarOpen(true)}
            className="rounded-lg p-1.5 text-gray-500 hover:bg-gray-100 lg:hidden"
            aria-label="Open sidebar"
          >
            <Menu className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-1.5 text-sm text-gray-500">
            <span>Admin</span>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="font-medium text-gray-900">
              {activeItem?.label || "Dashboard"}
            </span>
          </div>

          <div className="ml-auto flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-brand text-xs font-bold text-white flex items-center justify-center">
              AD
            </div>
          </div>
        </header>

        {/* View area */}
        <main className="flex-1 overflow-y-auto p-5 lg:p-8">
          {renderView()}
        </main>
      </div>
    </div>
  );
}
