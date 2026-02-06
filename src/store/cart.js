// src/store/cart.js
import { persistentAtom } from '@nanostores/persistent';

// 1. Creamos el "almacén" del carrito. 
// Se guardará en el navegador del usuario bajo la llave 'lucas-cart'
// Es un array [] vacío al principio, pero persistente.
export const cartItems = persistentAtom('lucas-cart', [], {
  encode: JSON.stringify,
  decode: JSON.parse,
});

// 2. Función para agregar un producto
export function addItem(item) {
  const currentItems = cartItems.get();
  const existingItem = currentItems.find((i) => i.name === item.name);

  if (existingItem) {
    // Si ya existe, le sumamos 1 a la cantidad
    cartItems.set(
      currentItems.map((i) =>
        i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
      )
    );
  } else {
    // Si es nuevo, lo agregamos con cantidad 1
    cartItems.set([...currentItems, { ...item, quantity: 1 }]);
  }
}

// 3. Función para quitar un producto (o restar cantidad)
export function removeItem(itemName) {
  const currentItems = cartItems.get();
  const existingItem = currentItems.find((i) => i.name === itemName);

  if (existingItem && existingItem.quantity > 1) {
    // Si hay más de 1, restamos
    cartItems.set(
      currentItems.map((i) =>
        i.name === itemName ? { ...i, quantity: i.quantity - 1 } : i
      )
    );
  } else {
    // Si solo queda 1, lo borramos del todo
    cartItems.set(currentItems.filter((i) => i.name !== itemName));
  }
}

// 4. Limpiar todo el carrito (para cuando ya pidió)
export function clearCart() {
  cartItems.set([]);
}