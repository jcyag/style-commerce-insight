
import { Package } from "lucide-react";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  quantity: number;
  total: number;
}

const topProducts: Product[] = [
  {
    id: 1,
    name: "Premium Denim Jacket",
    category: "Outerwear",
    price: 129.99,
    quantity: 45,
    total: 5849.55,
  },
  {
    id: 2,
    name: "Slim Fit Chinos",
    category: "Pants",
    price: 59.99,
    quantity: 78,
    total: 4679.22,
  },
  {
    id: 3,
    name: "Cotton V-Neck T-Shirt",
    category: "T-Shirts",
    price: 24.99,
    quantity: 156,
    total: 3898.44,
  },
  {
    id: 4,
    name: "Leather Ankle Boots",
    category: "Footwear",
    price: 149.99,
    quantity: 23,
    total: 3449.77,
  },
];

const TopProducts = () => {
  return (
    <div className="sales-card">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Package className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-medium">Top Selling Products</h3>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="pb-2 text-left font-medium text-muted-foreground">Product</th>
              <th className="pb-2 text-left font-medium text-muted-foreground">Category</th>
              <th className="pb-2 text-right font-medium text-muted-foreground">Price</th>
              <th className="pb-2 text-right font-medium text-muted-foreground">Sold</th>
              <th className="pb-2 text-right font-medium text-muted-foreground">Revenue</th>
            </tr>
          </thead>
          <tbody>
            {topProducts.map((product) => (
              <tr key={product.id} className="border-b last:border-0 hover:bg-muted/50">
                <td className="py-3 pr-4 text-left">
                  {product.name}
                </td>
                <td className="py-3 pr-4 text-left text-muted-foreground">
                  {product.category}
                </td>
                <td className="py-3 pr-4 text-right">
                  ${product.price.toFixed(2)}
                </td>
                <td className="py-3 pr-4 text-right">
                  {product.quantity}
                </td>
                <td className="py-3 text-right font-medium">
                  ${product.total.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopProducts;
