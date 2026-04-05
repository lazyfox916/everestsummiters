"use client";

import { useState } from "react";
import { Save, Globe, Bell, Shield, Palette } from "lucide-react";

export default function SettingsView() {
  const [siteName, setSiteName] = useState("Mt. Everest Summiters Club");
  const [siteDescription, setSiteDescription] = useState(
    "Mt. Everest Summiters Club – Rolwaling, Dolakha"
  );
  const [email, setEmail] = useState("info@everestsummitersclub.org.np");
  const [notifications, setNotifications] = useState({
    newMembers: true,
    donations: true,
    blogComments: false,
    weeklyReport: true,
  });

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-heading text-2xl font-semibold text-gray-900">
          Settings
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Manage your site settings and preferences.
        </p>
      </div>

      <div className="space-y-6">
        {/* General Settings */}
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="flex items-center gap-3 border-b border-gray-100 px-5 py-4">
            <Globe className="h-5 w-5 text-gray-400" />
            <h3 className="font-heading text-base font-semibold text-gray-900">
              General
            </h3>
          </div>
          <div className="space-y-4 p-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Site Name
              </label>
              <input
                type="text"
                value={siteName}
                onChange={(e) => setSiteName(e.target.value)}
                className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-gray-900 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                value={siteDescription}
                onChange={(e) => setSiteDescription(e.target.value)}
                rows={3}
                className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-gray-900 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Contact Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-gray-900 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              />
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="flex items-center gap-3 border-b border-gray-100 px-5 py-4">
            <Bell className="h-5 w-5 text-gray-400" />
            <h3 className="font-heading text-base font-semibold text-gray-900">
              Notifications
            </h3>
          </div>
          <div className="divide-y divide-gray-50 p-5">
            {Object.entries(notifications).map(([key, enabled]) => (
              <div
                key={key}
                className="flex items-center justify-between py-3 first:pt-0 last:pb-0"
              >
                <div>
                  <p className="text-sm font-medium text-gray-900 capitalize">
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </p>
                  <p className="text-xs text-gray-500">
                    Receive notifications for {key.replace(/([A-Z])/g, " $1").toLowerCase().trim()}
                  </p>
                </div>
                <button
                  onClick={() =>
                    setNotifications((prev) => ({
                      ...prev,
                      [key]: !prev[key],
                    }))
                  }
                  className={`relative h-6 w-11 rounded-full transition-colors ${
                    enabled ? "bg-accent" : "bg-gray-200"
                  }`}
                >
                  <span
                    className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform ${
                      enabled ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Save */}
        <div className="flex justify-end">
          <button className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-brand/90">
            <Save className="h-4 w-4" />
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
