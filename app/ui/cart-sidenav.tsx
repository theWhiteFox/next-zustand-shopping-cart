'use client'

import AcmeLogo from '@/app/ui/acme-logo';
import useCartStore from '../store/cartStore';
import { Button } from './button';

// interface CartSideNavProps {
//   style?: React.CSSProperties;
//   close: () => void;
//   open: boolean;
// }

export default function CartSideNav() {
  const { items, updateQuantity } = useCartStore((state) => state)
  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // add tax 

  const total = subtotal

  return (
    <div className="fixed top-0 right-0 h-full shadow-lg flex flex-col h-full bg-gray-800 text-white overflow-scroll">
      <div className="p-4">
        <AcmeLogo />
        <h2 className="text-2xl font-bold">Cart ({items.reduce((sum, i) => sum + i.quantity, 0)}
          )
        </h2>
        {items.length > 0 ? items.map((item) => (
          <div key={item.id} className="flex items-center justify-between py-2">
            <div className="flex items-center">
              <img src={item.image_url} alt={item.name} className="w-12 h-12 rounded-md" />
              <div className="ml-2">
                <h3 className="text-lg font-bold">{item.name}</h3>
                <p className="text-gray-400">Price: ${item.price}</p>
              </div>
            </div>
            <div className="flex items-center">
              <Button
                onClick={() => updateQuantity("decrement", item.id)}
              >
                -
              </Button>
              <span className="mx-2">{item.quantity}</span>
              <Button
                onClick={() => updateQuantity("increment", item.id)}
              >
                +
              </Button>
            </div>
          </div>
          
        )) : (
          <div className='py-5 px-2'>Cart is empty </div>
        )}
      </div>
      <div className="flex justify-between font-semibold text-lg mt-4 pt-4 border-t">
                <span>Total</span>
                <span>€{total.toFixed(2)}</span>
              </div>
    </div>
  );
}
