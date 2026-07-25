"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
} from "recharts";

const data = [
  { day: "Mon", revenue: 12 },
  { day: "Tue", revenue: 18 },
  { day: "Wed", revenue: 15 },
  { day: "Thu", revenue: 25 },
  { day: "Fri", revenue: 30 },
  { day: "Sat", revenue: 28 },
  { day: "Sun", revenue: 36 },
];

export default function RevenueChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Revenue Overview</CardTitle>
      </CardHeader>

      <CardContent className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <XAxis dataKey="day" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#2563EB"
              fill="#93C5FD"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}