
import { ReactNode } from "react";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-background">
      <Header />
      <main className="flex-1 overflow-y-auto p-6">
        {children}
      </main>
    </div>
  );
};

export default Layout;
