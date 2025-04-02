
import { Bell, Search, Sun, Moon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [open, setOpen] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className={`flex items-center justify-between p-4 border-b ${className}`}>
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
          <span className="font-bold">CS</span>
        </div>
        <div className="font-medium hidden sm:block">ClothStyle Dashboard</div>
      </div>
      
      <div className="flex-1 max-w-md mx-auto">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-full pl-9 bg-background"
            onClick={() => setOpen(true)}
            readOnly
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-primary"></span>
        </Button>
        
        <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
          {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
        
        <div className="flex items-center gap-3">
          <div className="font-medium hidden sm:block">Sarah Johnson</div>
          <div className="h-9 w-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
            SJ
          </div>
        </div>
      </div>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search for products, customers, or orders..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Products">
            <CommandItem>T-shirts</CommandItem>
            <CommandItem>Jeans</CommandItem>
            <CommandItem>Sweaters</CommandItem>
          </CommandGroup>
          <CommandGroup heading="Customers">
            <CommandItem>Recent customers</CommandItem>
            <CommandItem>Top customers</CommandItem>
          </CommandGroup>
          <CommandGroup heading="Orders">
            <CommandItem>Recent orders</CommandItem>
            <CommandItem>Pending orders</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </header>
  );
};

export default Header;
