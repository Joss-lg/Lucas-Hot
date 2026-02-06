// src/components/AddToCartBtn.jsx
import { addItem } from "../store/cart";
import { useState } from "preact/hooks";

export default function AddToCartBtn({ item }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = (e) => {
    // 1. Agregar a la tienda lógica
    addItem(item);
    
    // 2. Efecto visual del botón (cambio de texto/color)
    setClicked(true);
    setTimeout(() => setClicked(false), 2000);

    // 3. Obtener coordenadas para la explosión global
    const rect = e.currentTarget.getBoundingClientRect();
    
    // 4. Avisar al ParticlesManager: "¡Dispara fuego aquí!"
    window.dispatchEvent(
      new CustomEvent("add-to-cart-spark", {
        detail: {
          x: rect.left + rect.width / 2, // Centro horizontal del botón
          y: rect.top + rect.height / 2, // Centro vertical del botón
        },
      })
    );
  };

  return (
    <button
      onClick={handleClick}
      className={`
        w-full py-3 px-6 rounded-full font-bold text-white
        transition-all duration-300 transform border
        ${clicked 
            ? 'bg-gradient-to-t from-red-600 to-orange-500 border-yellow-400 scale-95 shadow-[0_0_30px_#FF4D00]' 
            : 'bg-lucas-pink border-transparent hover:bg-white hover:text-lucas-pink hover:scale-105 shadow-[0_0_20px_rgba(255,0,199,0.4)]'
        }
      `}
    >
      <span className="flex items-center justify-center gap-2">
        {clicked ? (
            <>🔥 ¡AGREGADO! 🔥</>
        ) : (
            'AGREGAR +'
        )}
      </span>
    </button>
  );
}