
import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  trend?: {
    value: string;
    positive: boolean;
  };
  icon?: React.ReactNode;
  className?: string;
}

const StatCard = ({
  title,
  value,
  trend,
  icon,
  className,
}: StatCardProps) => {
  return (
    <div className={cn("sales-card flex flex-col", className)}>
      <div className="flex justify-between items-start">
        <div>
          <p className="stat-label">{title}</p>
          <p className="stat-value">{value}</p>
        </div>
        {icon && (
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            {icon}
          </div>
        )}
      </div>
      
      {trend && (
        <div className="flex items-center mt-4 text-sm">
          {trend.positive ? (
            <TrendingUp className="h-4 w-4 mr-1 text-green-500" />
          ) : (
            <TrendingDown className="h-4 w-4 mr-1 text-red-500" />
          )}
          <span 
            className={trend.positive ? "trend-up" : "trend-down"}
          >
            {trend.value}
          </span>
          <span className="text-muted-foreground ml-1">vs last period</span>
        </div>
      )}
    </div>
  );
};

export default StatCard;
