// src/components/CartCounter.jsx
import { useStore } from '@nanostores/preact';
import { cartItems } from '../store/cart';

export default function CartCounter() {
  const $cartItems = useStore(cartItems);
  
  // Sumamos la cantidad total de todos los productos
  const totalCount = $cartItems.reduce((acc, item) => acc + item.quantity, 0);

  if (totalCount === 0) return null; // Si está vacío, no mostramos nada

  return (
    <span className="absolute -top-2 -right-2 bg-lucas-fire text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full animate-bounce shadow-sm">
      {totalCount}
    </span>
  );
}