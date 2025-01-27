import { ProductCart } from '../ui/products/product-cart'

export default function Cart() {
 

  return (
    <div className="container mx-auto">
      <div className="mx-auto shadow-lg flex flex-col bg-gray-800 text-white overflow-scroll overflow-scroll">
        <ProductCart />
      </div>
    </div>
  );
}
