
import { Package, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Order {
  id: string;
  customer: string;
  date: string;
  status: "pending" | "processing" | "shipped" | "delivered" | "returned";
  amount: number;
}

const recentOrders: Order[] = [
  {
    id: "ORD-7865",
    customer: "John Smith",
    date: "Today, 2:30 PM",
    status: "pending",
    amount: 128.50,
  },
  {
    id: "ORD-7864",
    customer: "Lisa Johnson",
    date: "Today, 11:20 AM",
    status: "processing",
    amount: 253.99,
  },
  {
    id: "ORD-7863",
    customer: "Michael Brown",
    date: "Yesterday, 5:15 PM",
    status: "shipped",
    amount: 89.25,
  },
  {
    id: "ORD-7862",
    customer: "Emma Wilson",
    date: "Yesterday, 2:45 PM",
    status: "delivered",
    amount: 175.80,
  },
];

const getStatusColor = (status: Order["status"]) => {
  const statusColors = {
    pending: "bg-amber-100 text-amber-800",
    processing: "bg-blue-100 text-blue-800",
    shipped: "bg-purple-100 text-purple-800",
    delivered: "bg-green-100 text-green-800",
    returned: "bg-red-100 text-red-800",
  };
  
  return statusColors[status];
};

const RecentOrders = () => {
  return (
    <div className="sales-card">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Package className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-medium">Recent Orders</h3>
        </div>
        <Button variant="ghost" size="sm" className="gap-1 text-primary">
          View All <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="space-y-4">
        {recentOrders.map((order) => (
          <div key={order.id} className="flex items-center justify-between p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
            <div>
              <div className="font-medium">{order.customer}</div>
              <div className="text-sm text-muted-foreground">{order.id} • {order.date}</div>
            </div>
            
            <div className="flex items-center gap-3">
              <span className={cn("px-2.5 py-0.5 rounded-full text-xs font-medium", getStatusColor(order.status))}>
                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
              </span>
              <span className="font-medium">${order.amount.toFixed(2)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentOrders;
