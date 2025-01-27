import Header from "@/app/ui/header";
import ProductsTable from "./ui/products/product-table";

export default function Home() {

  return (
    <div className="container mx-auto">
      <Header />
      <h1 className="text-4xl font-bold text-center my-8">Products</h1>
      <ProductsTable />
    </div>
  );
}
