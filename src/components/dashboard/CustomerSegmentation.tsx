
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

const data = [
  { name: "New Customers", value: 35 },
  { name: "Returning", value: 45 },
  { name: "Loyal", value: 20 },
];

const COLORS = ["#3b82f6", "#6366f1", "#8b5cf6"];

const CustomerSegmentation = () => {
  return (
    <div className="sales-card h-[400px]">
      <h3 className="text-lg font-medium mb-6">Customer Segmentation</h3>
      
      <ResponsiveContainer width="100%" height="85%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={90}
            paddingAngle={5}
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value) => [`${value}%`, 'Percentage']}
            contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              borderColor: 'hsl(var(--border))',
              borderRadius: 'var(--radius)',
              color: 'hsl(var(--card-foreground))',
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomerSegmentation;
