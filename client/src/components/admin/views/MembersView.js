"use client";

import { useState } from "react";
import { Search, Plus, Filter, X, Trash2, Pencil } from "lucide-react";

const emptyForm = {
  name: "",
  role: "Member",
  summits: 0,
  joined: new Date().toISOString().slice(0, 10),
  status: "active",
};

export default function MembersView({ members, setMembers }) {
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  const filtered = members.filter((m) => {
    const matchesSearch =
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.role.toLowerCase().includes(search.toLowerCase());
    const matchesStatus =
      filterStatus === "all" || m.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  function openAdd() {
    setEditingId(null);
    setForm(emptyForm);
    setShowModal(true);
  }

  function openEdit(member) {
    setEditingId(member.id);
    setForm({
      name: member.name,
      role: member.role,
      summits: member.summits,
      joined: member.joined,
      status: member.status,
    });
    setShowModal(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name.trim()) return;

    if (editingId !== null) {
      setMembers((prev) =>
        prev.map((m) =>
          m.id === editingId
            ? { ...m, ...form, summits: Number(form.summits) }
            : m
        )
      );
    } else {
      const newId =
        members.length > 0 ? Math.max(...members.map((m) => m.id)) + 1 : 1;
      setMembers((prev) => [
        ...prev,
        { id: newId, ...form, summits: Number(form.summits) },
      ]);
    }

    setShowModal(false);
    setForm(emptyForm);
    setEditingId(null);
  }

  function handleDelete(id) {
    setMembers((prev) => prev.filter((m) => m.id !== id));
    setDeleteConfirm(null);
  }

  function updateField(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-heading text-2xl font-semibold text-gray-900">
            Members
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Manage club members and their roles. {members.length} total members.
          </p>
        </div>
        <button
          onClick={openAdd}
          className="inline-flex items-center gap-2 rounded-lg bg-brand px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-brand/90"
        >
          <Plus className="h-4 w-4" />
          Add Member
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search members..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-gray-200 bg-white py-2.5 pl-10 pr-4 text-sm text-gray-900 placeholder:text-gray-400 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-gray-400" />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-700 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 text-left text-xs font-medium uppercase tracking-wider text-gray-400">
                <th className="px-5 py-3.5">Member</th>
                <th className="px-5 py-3.5">Role</th>
                <th className="px-5 py-3.5">Summits</th>
                <th className="px-5 py-3.5">Joined</th>
                <th className="px-5 py-3.5">Status</th>
                <th className="px-5 py-3.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.map((m) => (
                <tr key={m.id} className="hover:bg-gray-50/50">
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent">
                        {m.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .slice(0, 2)}
                      </div>
                      <span className="font-medium text-gray-900">
                        {m.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-5 py-3.5 text-gray-600">{m.role}</td>
                  <td className="px-5 py-3.5 tabular-nums text-gray-600">
                    {m.summits}
                  </td>
                  <td className="px-5 py-3.5 text-gray-500">{m.joined}</td>
                  <td className="px-5 py-3.5">
                    <span
                      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium capitalize ${
                        m.status === "active"
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {m.status}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => openEdit(m)}
                        className="rounded p-1 text-gray-400 transition hover:bg-gray-100 hover:text-accent"
                        title="Edit"
                      >
                        <Pencil className="h-3.5 w-3.5" />
                      </button>
                      {deleteConfirm === m.id ? (
                        <span className="flex items-center gap-1">
                          <button
                            onClick={() => handleDelete(m.id)}
                            className="rounded bg-red-500 px-2 py-0.5 text-xs font-medium text-white hover:bg-red-600"
                          >
                            Confirm
                          </button>
                          <button
                            onClick={() => setDeleteConfirm(null)}
                            className="text-xs text-gray-400 hover:text-gray-600"
                          >
                            Cancel
                          </button>
                        </span>
                      ) : (
                        <button
                          onClick={() => setDeleteConfirm(m.id)}
                          className="rounded p-1 text-gray-400 transition hover:bg-red-50 hover:text-red-500"
                          title="Delete"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filtered.length === 0 && (
          <div className="px-5 py-12 text-center text-sm text-gray-400">
            No members found matching your criteria.
          </div>
        )}
      </div>

      {/* Add/Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
              <h3 className="font-heading text-lg font-semibold text-gray-900">
                {editingId !== null ? "Edit Member" : "Add New Member"}
              </h3>
              <button
                onClick={() => {
                  setShowModal(false);
                  setEditingId(null);
                }}
                className="rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 p-5">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  placeholder="e.g. Tenzing Norgay Sherpa"
                  className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Role
                  </label>
                  <select
                    value={form.role}
                    onChange={(e) => updateField("role", e.target.value)}
                    className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-gray-700 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  >
                    <option value="Member">Member</option>
                    <option value="President">President</option>
                    <option value="Vice President">Vice President</option>
                    <option value="Secretary">Secretary</option>
                    <option value="Treasurer">Treasurer</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Summits
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={form.summits}
                    onChange={(e) => updateField("summits", e.target.value)}
                    className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-gray-900 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Date Joined
                  </label>
                  <input
                    type="date"
                    value={form.joined}
                    onChange={(e) => updateField("joined", e.target.value)}
                    className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-gray-900 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Status
                  </label>
                  <select
                    value={form.status}
                    onChange={(e) => updateField("status", e.target.value)}
                    className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-gray-700 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 border-t border-gray-100 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    setEditingId(null);
                  }}
                  className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-lg bg-brand px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-brand/90"
                >
                  {editingId !== null ? "Save Changes" : "Add Member"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
