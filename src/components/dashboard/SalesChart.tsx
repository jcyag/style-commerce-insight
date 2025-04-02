
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const salesData = [
  { date: "Jan", sales: 4000 },
  { date: "Feb", sales: 3000 },
  { date: "Mar", sales: 5000 },
  { date: "Apr", sales: 4500 },
  { date: "May", sales: 6000 },
  { date: "Jun", sales: 5500 },
  { date: "Jul", sales: 7000 },
  { date: "Aug", sales: 8000 },
  { date: "Sep", sales: 7500 },
  { date: "Oct", sales: 9000 },
  { date: "Nov", sales: 10000 },
  { date: "Dec", sales: 12000 },
];

const timeRanges = ["Daily", "Weekly", "Monthly", "Yearly"] as const;
type TimeRange = (typeof timeRanges)[number];

const SalesChart = () => {
  const [timeRange, setTimeRange] = useState<TimeRange>("Monthly");

  return (
    <div className="sales-card h-[400px]">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-medium">Sales Trends</h3>
        <div className="flex gap-2">
          {timeRanges.map((range) => (
            <Button
              key={range}
              size="sm"
              variant={timeRange === range ? "default" : "outline"}
              onClick={() => setTimeRange(range)}
            >
              {range}
            </Button>
          ))}
        </div>
      </div>
      
      <ResponsiveContainer width="100%" height="85%">
        <AreaChart
          data={salesData}
          margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
              <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="date" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: 'hsl(var(--muted-foreground))' }}
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: 'hsl(var(--muted-foreground))' }}
            width={50}
            tickFormatter={(value) => `$${value}`}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'hsl(var(--card))', 
              borderColor: 'hsl(var(--border))',
              borderRadius: 'var(--radius)',
              color: 'hsl(var(--card-foreground))'
            }} 
            formatter={(value) => [`$${value}`, 'Revenue']}
          />
          <Area
            type="monotone"
            dataKey="sales"
            stroke="hsl(var(--primary))"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorSales)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;
