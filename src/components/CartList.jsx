// src/components/CartList.jsx
import { useStore } from '@nanostores/preact';
import { cartItems, removeItem, clearCart } from '../store/cart';
import { useState, useEffect } from 'preact/hooks';

export default function CartList() {
  const $cartItems = useStore(cartItems);
  const [total, setTotal] = useState(0);
  const [comments, setComments] = useState('');

  // Tu número confirmado
  const PHONE_NUMBER = '5215549095467'; 

  useEffect(() => {
    const newTotal = $cartItems.reduce((acc, item) => {
      const priceString = item.price.replace('$', '').split(' ')[0]; 
      const price = parseFloat(priceString) || 0;
      return acc + (price * item.quantity);
    }, 0);
    setTotal(newTotal);
  }, [$cartItems]);

  const sendToWhatsapp = () => {
    if ($cartItems.length === 0) return;
    let message = `🔥 *HOLA LUCAS HOT, QUIERO HACER UN PEDIDO:* 🔥\n\n`;
    $cartItems.forEach(item => {
      message += `▪️ ${item.quantity}x ${item.name} (${item.price})\n`;
    });
    message += `\n💰 *Total Estimado: $${total}*\n`;
    if (comments) message += `📝 *Nota/Dirección:* ${comments}\n`;
    
    const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  if ($cartItems.length === 0) {
    return (
      <div className="text-center py-32 px-4">
        <div className="text-8xl mb-6 animate-bounce">🛒</div>
        <h2 className="text-3xl text-white font-display uppercase tracking-wide mb-6">Tu carrito está vacío</h2>
        <a href="/#menu-start" className="inline-block bg-lucas-pink text-white text-xl px-8 py-3 rounded-full font-bold hover:bg-white hover:text-lucas-pink transition-all shadow-[0_0_20px_#FF00C7]">
          ← Volver al Menú
        </a>
      </div>
    );
  }

  return (
    // CAMBIO 1: Fondo más sólido y visible (Gris muy oscuro/Morado) en lugar de transparente
    <div className="max-w-4xl mx-auto bg-[#1A103C] p-6 md:p-10 rounded-3xl border-2 border-lucas-purple shadow-2xl relative overflow-hidden">
      
      {/* Decoración de fondo */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-lucas-pink/10 rounded-full blur-[80px] -z-0 pointer-events-none"></div>

      <h2 className="text-3xl font-display text-white mb-8 border-b border-gray-700 pb-4 relative z-10">
        Resumen de tu Orden
      </h2>

      {/* Lista de Productos */}
      <div className="space-y-4 mb-10 relative z-10">
        {$cartItems.map((item) => (
          // CAMBIO 2: Tarjetas de producto más claras y definidas
          <div key={item.name} className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#0F0529] hover:bg-[#150835] p-5 rounded-2xl border border-gray-700 transition-colors group">
            
            <div className="flex items-center gap-4 w-full sm:w-auto">
              {/* Botón Eliminar más grande y visible */}
              <button 
                onClick={() => removeItem(item.name)}
                className="bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-all"
                title="Eliminar producto"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              
              <div className="text-left">
                <h3 className="text-white font-bold text-lg leading-tight">{item.name}</h3>
                <p className="text-lucas-pink text-sm font-bold">{item.price} c/u</p>
              </div>
            </div>

            {/* Cantidad y Subtotal */}
            <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end bg-black/20 px-4 py-2 rounded-lg">
              <span className="text-gray-400 text-sm uppercase tracking-wider font-bold">Cantidad:</span>
              <span className="text-white font-display text-2xl">x{item.quantity}</span>
            </div>

          </div>
        ))}
      </div>

      {/* Sección Final (Formulario y Total) */}
      <div className="bg-[#050014] rounded-2xl p-6 md:p-8 border border-gray-800 relative z-10">
        <div className="flex flex-col md:flex-row gap-8 items-start">
            
            {/* Campo de Texto (Mejorado) */}
            <div className="w-full md:w-2/3">
                <label className="block text-lucas-pink font-bold text-sm mb-3 uppercase tracking-wider">
                    📍 ¿Dirección de entrega o notas extra?
                </label>
                <textarea 
                    className="w-full bg-[#1A103C] text-white border-2 border-gray-700 rounded-xl p-4 focus:border-lucas-pink focus:outline-none focus:ring-4 focus:ring-lucas-pink/20 transition-all placeholder-gray-500"
                    rows="3"
                    placeholder="Ej: Calle Reforma #10, portón negro. / Sin catsup en las papas."
                    value={comments}
                    onInput={(e) => setComments(e.target.value)}
                ></textarea>
            </div>

            {/* Total y Botón */}
            <div className="w-full md:w-1/3 flex flex-col justify-between h-full gap-4">
                <div className="flex justify-between items-end border-b border-gray-800 pb-4">
                    <span className="text-gray-400 font-bold">Total Aprox:</span>
                    <span className="text-4xl font-display text-lucas-fire">${total}</span>
                </div>
                
                <button 
                    onClick={sendToWhatsapp}
                    className="w-full bg-[#25D366] hover:bg-[#1da864] text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_4px_0_#15804c] active:shadow-none active:translate-y-[4px]"
                >
                    <span>📱</span> ENVIAR PEDIDO
                </button>

                <button onClick={clearCart} className="text-center text-sm text-red-500 hover:text-red-400 underline decoration-red-500/30">
                    Vaciar todo el carrito
                </button>
            </div>
        </div>
      </div>

    </div>
  );
}