import React from "react";

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  subtext?: string;
}

export default function StatCard({ icon, label, value, subtext }: StatCardProps) {
  return (
    <div className="bg-white dark:bg-water-800 rounded-lg p-4 shadow-sm text-center">
      <div className="text-copper-500 flex justify-center mb-2">{icon}</div>
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="text-xl font-heading font-bold">{value}</p>
      {subtext && <p className="text-xs text-muted-foreground mt-1">{subtext}</p>}
    </div>
  );
}
