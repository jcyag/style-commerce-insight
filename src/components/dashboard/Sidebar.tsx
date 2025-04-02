
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  Home,
  Users,
  ShoppingBag,
  Package,
  BarChart,
  Settings,
  LogOut,
  Store
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { icon: Home, label: "Dashboard", path: "/" },
    { icon: ShoppingBag, label: "Products", path: "/products" },
    { icon: Users, label: "Customers", path: "/customers" },
    { icon: Package, label: "Orders", path: "/orders" },
    { icon: Store, label: "Stores", path: "/stores" },
    { icon: BarChart, label: "Reports", path: "/reports" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ];

  return (
    <aside className={cn("w-64 border-r bg-sidebar p-4 flex flex-col h-full", className)}>
      <div className="flex items-center gap-2 px-2 py-4">
        <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
          <span className="text-primary-foreground font-bold">CS</span>
        </div>
        <h1 className="font-bold text-lg">ClothStyle</h1>
      </div>
      
      <nav className="space-y-1 mt-8 flex-1">
        {navItems.map((item) => (
          <Link 
            key={item.path} 
            to={item.path}
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
              isActive(item.path) 
                ? "bg-sidebar-accent text-sidebar-accent-foreground" 
                : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
            )}
          >
            <item.icon className="h-5 w-5" />
            {item.label}
          </Link>
        ))}
      </nav>
      
      <div className="mt-auto pt-4 border-t">
        <Button variant="ghost" className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground">
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;
