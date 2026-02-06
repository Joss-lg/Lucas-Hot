// src/components/ParticlesManager.jsx
import { useEffect } from "preact/hooks";
import confetti from "canvas-confetti";

export default function ParticlesManager() {
  useEffect(() => {
    const onSpark = (e) => {
      const { x, y } = e.detail;
      const originX = x / window.innerWidth;
      const originY = y / window.innerHeight;

      // CONFIGURACIÓN 🔥
      const fireOptions = {
        particleCount: 60,
        spread: 70,
        origin: { x: originX, y: originY },
        // --- CAMBIO AQUÍ ---
        // Quitamos el blanco. Solo colores HOT: Rojo, Naranja, Amarillo Oro
        colors: ['#d30000', '#ff4d00', '#ffcc00'], 
        disableForReducedMotion: true,
        zIndex: 999999,
      };

      // 1. Chispas rápidas
      confetti({
        ...fireOptions,
        particleCount: 40,
        scalar: 0.8,
        shapes: ['circle'],
        startVelocity: 30,
        gravity: 0.6,
        drift: 0,
      });

      // 2. Llamas grandes
      confetti({
        ...fireOptions,
        particleCount: 20,
        scalar: 1.5,
        shapes: ['circle'],
        startVelocity: 45,
        gravity: 0.9,
        decay: 0.9,
      });
      
      console.log("🚀 ¡EXPLOSIÓN DE FUEGO (Sin blanco)!");
    };

    window.addEventListener("add-to-cart-spark", onSpark);

    return () => {
      window.removeEventListener("add-to-cart-spark", onSpark);
    };
  }, []);

  return null;
}