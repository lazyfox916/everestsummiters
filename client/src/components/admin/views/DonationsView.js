import { Heart, TrendingUp, Calendar, Users } from "lucide-react";

const donations = [
  { id: 1, donor: "Nepal Mountaineering Assoc.", amount: "₨ 250,000", date: "2026-03-15", type: "Organization" },
  { id: 2, donor: "Tashi Lakpa Sherpa", amount: "₨ 50,000", date: "2026-03-10", type: "Individual" },
  { id: 3, donor: "Himalayan Trust Fund", amount: "₨ 500,000", date: "2026-02-28", type: "Organization" },
  { id: 4, donor: "International Alpine Club", amount: "₨ 180,000", date: "2026-02-15", type: "Organization" },
  { id: 5, donor: "Ang Tshering Sherpa", amount: "₨ 75,000", date: "2026-01-20", type: "Individual" },
  { id: 6, donor: "Adventure Tourism Board", amount: "₨ 120,000", date: "2026-01-05", type: "Organization" },
];

const summaryCards = [
  { label: "Total Raised", value: "₨ 1.2M", icon: Heart, color: "bg-rose-50 text-rose-600" },
  { label: "This Month", value: "₨ 300K", icon: Calendar, color: "bg-blue-50 text-blue-600" },
  { label: "Donors", value: "42", icon: Users, color: "bg-violet-50 text-violet-600" },
  { label: "Growth", value: "+18%", icon: TrendingUp, color: "bg-emerald-50 text-emerald-600" },
];

export default function DonationsView() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-heading text-2xl font-semibold text-gray-900">
          Donations
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Track donations and contributions to the club.
        </p>
      </div>

      {/* Summary */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {summaryCards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.label}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <div className={`inline-flex h-10 w-10 items-center justify-center rounded-lg ${card.color}`}>
                <Icon className="h-5 w-5" />
              </div>
              <p className="mt-3 text-2xl font-bold text-gray-900">
                {card.value}
              </p>
              <p className="text-sm text-gray-500">{card.label}</p>
            </div>
          );
        })}
      </div>

      {/* Donations table */}
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <div className="border-b border-gray-100 px-5 py-4">
          <h3 className="font-heading text-base font-semibold text-gray-900">
            Recent Donations
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 text-left text-xs font-medium uppercase tracking-wider text-gray-400">
                <th className="px-5 py-3.5">Donor</th>
                <th className="px-5 py-3.5">Type</th>
                <th className="px-5 py-3.5">Date</th>
                <th className="px-5 py-3.5 text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {donations.map((d) => (
                <tr key={d.id} className="hover:bg-gray-50/50">
                  <td className="px-5 py-3.5 font-medium text-gray-900">
                    {d.donor}
                  </td>
                  <td className="px-5 py-3.5">
                    <span
                      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                        d.type === "Organization"
                          ? "bg-blue-50 text-blue-700"
                          : "bg-violet-50 text-violet-700"
                      }`}
                    >
                      {d.type}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-gray-500">{d.date}</td>
                  <td className="px-5 py-3.5 text-right font-semibold tabular-nums text-gray-900">
                    {d.amount}
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
