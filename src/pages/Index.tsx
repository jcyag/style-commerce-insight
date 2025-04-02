
import Layout from "@/components/dashboard/Layout";
import StatCard from "@/components/dashboard/StatCard";
import SalesChart from "@/components/dashboard/SalesChart";
import TopProducts from "@/components/dashboard/TopProducts";
import RecentOrders from "@/components/dashboard/RecentOrders";
import CustomerSegmentation from "@/components/dashboard/CustomerSegmentation";
import { DollarSign, ShoppingBag, Users, Store } from "lucide-react";

const Dashboard = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Sales Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, Sarah! Here's what's happening with your store today.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Revenue"
            value="$24,563.85"
            trend={{ value: "+12.5%", positive: true }}
            icon={<DollarSign className="h-5 w-5" />}
          />
          <StatCard
            title="Total Orders"
            value="1,253"
            trend={{ value: "+8.2%", positive: true }}
            icon={<ShoppingBag className="h-5 w-5" />}
          />
          <StatCard
            title="Total Customers"
            value="3,872"
            trend={{ value: "+5.7%", positive: true }}
            icon={<Users className="h-5 w-5" />}
          />
          <StatCard
            title="Avg. Order Value"
            value="$195.23"
            trend={{ value: "-2.3%", positive: false }}
            icon={<Store className="h-5 w-5" />}
          />
        </div>
        
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2">
            <SalesChart />
          </div>
          <div>
            <CustomerSegmentation />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TopProducts />
          <RecentOrders />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
