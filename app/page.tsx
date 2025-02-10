import Header from "@/app/ui/header";
import ProductsTable from "./ui/products/product-table";
import Footer from "./ui/footer";

export default function Home() {

  return (
    <div className="container mx-auto">
      <Header />
      <h1 className="text-4xl font-bold text-center my-8">Products</h1>
      <ProductsTable />
      <Footer />
    </div>
  );
}
