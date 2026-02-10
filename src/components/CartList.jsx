// src/components/CartList.jsx
import { useStore } from '@nanostores/preact';
import { cartItems, removeItem, clearCart } from '../store/cart';
import { useState, useEffect } from 'preact/hooks';

export default function CartList() {
  const $cartItems = useStore(cartItems);
  const [total, setTotal] = useState(0);

  // Estados
  const [cheeseExtras, setCheeseExtras] = useState({});
  const [sauceSelections, setSauceSelections] = useState({});

  // Estado Modal
  const [activeItemForSauce, setActiveItemForSauce] = useState(null);

  // Formulario
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [reference, setReference] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('efectivo'); 
  const [cashAmount, setCashAmount] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const PHONE_NUMBER = '525549095467'; 

  // OPCIONES DE SALSA CON COLORES DEFINIDOS
  // border-color y shadow-color personalizados para cada una
  const SAUCE_OPTIONS = [
    { id: 'BBQ', name: 'BBQ', desc: 'Dulce y Ahumada', gradient: 'from-green-400 to-green-600', solid: 'bg-green-500', border: 'border-green-400', shadow: 'shadow-green-500/50', icon: '🍯', level: '10%' },
    { id: 'Cajun', name: 'Cajun', desc: 'Especias Ricas', gradient: 'from-yellow-400 to-orange-500', solid: 'bg-yellow-500', border: 'border-yellow-400', shadow: 'shadow-yellow-500/50', icon: '🧂', level: '40%' },
    { id: 'Mango Habanero', name: 'Mango Habanero', desc: 'Dulce pero Pica', gradient: 'from-orange-500 to-red-500', solid: 'bg-orange-500', border: 'border-orange-500', shadow: 'shadow-orange-500/50', icon: '🥭', level: '75%' },
    { id: 'Habanero Solo', name: 'Habanero Solo', desc: 'Solo para Valientes', gradient: 'from-red-600 to-red-900', solid: 'bg-red-600', border: 'border-red-600', shadow: 'shadow-red-600/50', icon: '🔥', level: '100%' },
  ];

  const toggleCheese = (itemName) => {
    setCheeseExtras(prev => ({ ...prev, [itemName]: !prev[itemName] }));
  };

  const openSauceModal = (itemName) => {
    setActiveItemForSauce(itemName);
  };

  const confirmSauce = (sauceName) => {
    if (activeItemForSauce) {
        setSauceSelections(prev => ({ ...prev, [activeItemForSauce]: sauceName }));
        setActiveItemForSauce(null);
    }
  };

  const needsSauce = (itemName) => {
    const lowerName = itemName.toLowerCase();
    return lowerName.includes('alitas') || lowerName.includes('boneless') || lowerName.includes('costillas') || lowerName.includes('brocheta');
  };

  // Helper para obtener el objeto de la salsa seleccionada
  const getSelectedSauceObj = (itemName) => {
      const sauceName = sauceSelections[itemName];
      return SAUCE_OPTIONS.find(s => s.name === sauceName);
  };

  useEffect(() => {
    const newTotal = $cartItems.reduce((acc, item) => {
      const priceString = item.price.replace('$', '').split(' ')[0]; 
      let price = parseFloat(priceString) || 0;
      if (cheeseExtras[item.name]) price += 10;
      return acc + (price * item.quantity);
    }, 0);
    setTotal(newTotal);
  }, [$cartItems, cheeseExtras]);

  const showError = (msg) => {
    setErrorMsg(msg);
    setTimeout(() => setErrorMsg(''), 4000);
  };

  const sendToWhatsapp = () => {
    if ($cartItems.length === 0) return;

    if (!name.trim()) { showError("⚠️ Falta tu NOMBRE."); document.getElementById('input-name')?.focus(); return; }
    if (!address.trim()) { showError("📍 Falta tu DIRECCIÓN."); document.getElementById('input-address')?.focus(); return; }
    
    for (let item of $cartItems) {
        if (needsSauce(item.name) && !sauceSelections[item.name]) {
            showError(`🍗 ¡Alto! Elige la SALSA para: ${item.name}`);
            setActiveItemForSauce(item.name);
            return; 
        }
    }

    if (paymentMethod === 'efectivo') {
        if (!cashAmount) { showError("💵 Dinos con CUÁNTO PAGAS."); document.getElementById('input-cash')?.focus(); return; }
        if (parseFloat(cashAmount) < total) { showError(`⚠️ Tu pago es insuficiente.`); document.getElementById('input-cash')?.focus(); return; }
    }

    let message = `🔥 *HOLA LUCAS HOT, NUEVO PEDIDO:* 🔥\n\n`;
    message += `👤 *Cliente:* ${name}\n`;
    message += `📞 *Teléfono:* ${phone || 'Sin número'}\n`;
    message += `📍 *Dirección:* ${address}\n`;
    if (reference) message += `👀 *Referencia:* ${reference}\n`;
    message += `\n--------------------------------\n`;

    $cartItems.forEach(item => {
      const hasCheese = cheeseExtras[item.name];
      const sauce = sauceSelections[item.name];
      
      let finalName = item.name;
      if (hasCheese) finalName += " (CON QUESO EXTRA 🧀)";
      
      const basePrice = parseFloat(item.price.replace('$', ''));
      const finalPrice = hasCheese ? basePrice + 10 : basePrice;

      message += `▪️ ${item.quantity}x ${finalName} ($${finalPrice})\n`;
      if (sauce) message += `   ╰─ 🔥 Salsa: *${sauce.toUpperCase()}*\n`;
    });
    
    message += `\n💰 *TOTAL A PAGAR: $${total}*\n`;
    message += `💳 *Método de Pago:* ${paymentMethod.toUpperCase()}\n`;
    
    if (paymentMethod === 'efectivo') {
        const cambio = parseFloat(cashAmount) - total;
        message += `💵 *Paga con:* $${cashAmount}\n`;
        message += `🔄 *Cambio:* $${cambio > 0 ? cambio : 0}\n`;
    }

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
    <div className="max-w-4xl mx-auto bg-[#1A103C] p-6 md:p-10 rounded-3xl border-2 border-lucas-purple shadow-2xl relative overflow-hidden">
      
      <style>{`
        input::-webkit-outer-spin-button, input::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
        input[type=number] { -moz-appearance: textfield; }
        @keyframes slideInDown { from { transform: translate(-50%, -150%); opacity: 0; } to { transform: translate(-50%, 0); opacity: 1; } }
        @keyframes popIn { from { transform: scale(0.8); opacity: 0; } to { transform: scale(1); opacity: 1; } }
      `}</style>
      
      {/* --- MODAL DE SELECCIÓN DE SALSAS --- */}
      {activeItemForSauce && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-[popIn_0.3s_ease-out]">
            <div className="bg-[#150835] border-2 border-lucas-pink rounded-3xl p-6 w-full max-w-sm relative shadow-[0_0_50px_rgba(255,0,199,0.5)] overflow-hidden">
                <button onClick={() => setActiveItemForSauce(null)} className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold">&times;</button>
                <h3 className="text-center text-white text-xl font-display uppercase italic mb-1">Elige tu Nivel</h3>
                <p className="text-center text-lucas-pink text-xs font-bold mb-6 tracking-widest">{activeItemForSauce}</p>

                <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-green-500 via-yellow-500 to-red-600 opacity-50"></div>

                <div className="space-y-3">
                    {SAUCE_OPTIONS.map((sauce) => (
                        <button 
                            key={sauce.id}
                            onClick={() => confirmSauce(sauce.name)}
                            className="w-full flex items-center justify-between p-4 rounded-xl bg-black/40 border border-gray-700 hover:border-white hover:bg-white/10 transition-all group relative overflow-hidden"
                        >
                            <div className={`absolute left-0 top-0 bottom-0 opacity-20 transition-all duration-500 bg-gradient-to-r ${sauce.gradient}`} style={{ width: sauce.level }}></div>
                            <div className="flex items-center gap-3 relative z-10">
                                <span className="text-2xl filter drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">{sauce.icon}</span>
                                <div className="text-left">
                                    <span className="block text-white font-bold uppercase text-sm">{sauce.name}</span>
                                    <span className="block text-gray-400 text-[10px] uppercase tracking-wide">{sauce.desc}</span>
                                </div>
                            </div>
                            <div className="text-gray-500 group-hover:text-lucas-pink relative z-10 text-xl">➜</div>
                        </button>
                    ))}
                </div>
            </div>
        </div>
      )}

      {errorMsg && (
        <div className="fixed top-24 left-1/2 z-[100] w-[90%] max-w-md p-4 bg-[#090052] border-l-8 border-lucas-pink text-white rounded-r-lg shadow-[0_10px_40px_rgba(0,0,0,0.9)] flex items-center gap-4 animate-[slideInDown_0.4s_cubic-bezier(0.175,0.885,0.32,1.275)] backdrop-blur-xl ring-1 ring-white/10" style={{ transform: 'translateX(-50%)' }}>
            <div className="text-4xl">🚨</div>
            <div>
                <h4 className="font-bold text-lucas-pink uppercase tracking-widest text-xs mb-1">¡Atención!</h4>
                <p className="text-sm font-medium leading-tight">{errorMsg}</p>
            </div>
        </div>
      )}

      <div className="absolute top-0 right-0 w-64 h-64 bg-lucas-pink/10 rounded-full blur-[80px] -z-0 pointer-events-none"></div>

      <div className="relative z-10 mb-6">
        <a href="/#menu-start" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-bold text-sm uppercase tracking-wider group">
            <span className="bg-white/10 group-hover:bg-lucas-pink group-hover:text-white w-8 h-8 rounded-full flex items-center justify-center transition-all">←</span>
            Seguir pidiendo / Volver al menú
        </a>
      </div>

      <h2 className="text-3xl font-display text-white mb-2 relative z-10">
        Resumen de tu Orden
      </h2>
      <p className="text-gray-400 text-sm mb-8 relative z-10">Revisa tus antojos antes de enviar a cocina 🔥</p>

      <div className="space-y-4 mb-10 relative z-10">
        {$cartItems.map((item) => {
            const selectedSauceObj = getSelectedSauceObj(item.name);

            return (
              <div key={item.name} className="flex flex-col sm:flex-row items-start justify-between gap-4 bg-[#0F0529] hover:bg-[#150835] p-5 rounded-2xl border border-gray-700 transition-colors group">
                
                <div className="flex gap-4 w-full">
                  <button onClick={() => removeItem(item.name)} className="bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-all shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                  </button>
                  
                  <div className="text-left w-full">
                    <h3 className="text-white font-bold text-lg leading-tight">{item.name}</h3>
                    <p className="text-lucas-pink text-sm font-bold mb-2">{item.price} c/u</p>
                    
                    {item.extraCheese && (
                        <label className="flex items-center gap-2 mt-2 cursor-pointer select-none mb-3">
                            <div className="relative">
                                <input type="checkbox" className="peer sr-only" checked={!!cheeseExtras[item.name]} onChange={() => toggleCheese(item.name)}/>
                                <div className="w-5 h-5 border-2 border-gray-500 rounded bg-transparent peer-checked:bg-lucas-pink peer-checked:border-lucas-pink transition-all"></div>
                                <svg className="absolute top-0.5 left-0.5 w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                            </div>
                            <span className={`text-xs font-bold uppercase tracking-wider ${cheeseExtras[item.name] ? 'text-lucas-pink' : 'text-gray-400'}`}>+ Queso Extra ($10)</span>
                        </label>
                    )}

                    {/* --- BOTÓN DINÁMICO DE SALSA --- */}
                    {needsSauce(item.name) && (
                        <div className="mt-2">
                            {selectedSauceObj ? (
                                // BOTÓN DE SALSA SELECCIONADA CON COLOR
                                <button 
                                    onClick={() => openSauceModal(item.name)}
                                    className={`
                                        w-full flex items-center justify-between bg-black/40 border-2 rounded-lg p-3 transition-all
                                        ${selectedSauceObj.border} ${selectedSauceObj.shadow} shadow-lg
                                    `}
                                >
                                    <span className="text-xs font-bold text-gray-300 uppercase">Salsa Elegida:</span>
                                    <span className="text-sm font-bold text-white uppercase flex items-center gap-2">
                                        {selectedSauceObj.icon} 
                                        {selectedSauceObj.name}
                                    </span>
                                </button>
                            ) : (
                                // BOTÓN "ELEGIR SALSA"
                                <button 
                                    onClick={() => openSauceModal(item.name)}
                                    className="w-full bg-lucas-pink text-white font-bold py-2 rounded-lg shadow-[0_0_15px_#FF00C7] animate-pulse hover:scale-105 transition-transform uppercase text-xs flex items-center justify-center gap-2 border border-white/20"
                                >
                                    🎨 Elegir Baño de Salsa
                                </button>
                            )}
                        </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end bg-black/20 px-4 py-2 rounded-lg self-center sm:self-start">
                  <span className="text-gray-400 text-sm uppercase tracking-wider font-bold">Cantidad:</span>
                  <span className="text-white font-display text-2xl">x{item.quantity}</span>
                </div>
              </div>
            );
        })}
      </div>

      <div className="bg-[#050014] rounded-2xl p-6 md:p-8 border border-gray-800 relative z-10">
        <h3 className="text-lucas-pink font-display text-2xl mb-6 flex items-center gap-2">📝 Tus Datos de Entrega</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
                <label className="block text-gray-400 font-bold text-xs mb-2 uppercase tracking-wider">Nombre Completo *</label>
                <input id="input-name" type="text" placeholder="Ej: Juan Pérez" className={`w-full bg-[#1A103C] text-white border-2 rounded-xl p-3 focus:outline-none transition-colors ${errorMsg && !name.trim() ? 'border-red-500 animate-pulse' : 'border-gray-700 focus:border-lucas-pink'}`} value={name} onInput={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label className="block text-gray-400 font-bold text-xs mb-2 uppercase tracking-wider">Teléfono / WhatsApp</label>
                <input type="tel" placeholder="Ej: 55 1234 5678" className="w-full bg-[#1A103C] text-white border-2 border-gray-700 rounded-xl p-3 focus:border-lucas-pink focus:outline-none transition-colors" value={phone} onInput={(e) => setPhone(e.target.value)} />
            </div>
            <div className="md:col-span-2">
                <label className="block text-gray-400 font-bold text-xs mb-2 uppercase tracking-wider">Dirección Completa *</label>
                <textarea id="input-address" rows="2" placeholder="Calle, Número, Colonia, Municipio" className={`w-full bg-[#1A103C] text-white border-2 rounded-xl p-3 focus:outline-none transition-colors ${errorMsg && !address.trim() ? 'border-red-500 animate-pulse' : 'border-gray-700 focus:border-lucas-pink'}`} value={address} onInput={(e) => setAddress(e.target.value)}></textarea>
            </div>
             <div className="md:col-span-2">
                <label className="block text-gray-400 font-bold text-xs mb-2 uppercase tracking-wider">Referencias o Notas de cocina (Opcional)</label>
                <textarea rows="2" placeholder="Ej: Casa azul portón negro. / Sin cebolla en la hamburguesa." className="w-full bg-[#1A103C] text-white border-2 border-gray-700 rounded-xl p-3 focus:border-lucas-pink focus:outline-none transition-colors" value={reference} onInput={(e) => setReference(e.target.value)}></textarea>
            </div>
        </div>

        <h3 className="text-lucas-pink font-display text-2xl mb-4 flex items-center gap-2 border-t border-gray-800 pt-6">💳 Método de Pago</h3>
        <div className="grid grid-cols-3 gap-3 mb-6">
            <button className={`p-3 rounded-xl border-2 font-bold text-sm transition-all ${paymentMethod === 'efectivo' ? 'bg-lucas-pink border-lucas-pink text-white shadow-[0_0_15px_#FF00C7]' : 'bg-[#1A103C] border-gray-700 text-gray-400 hover:border-gray-500'}`} onClick={() => { setPaymentMethod('efectivo'); setCashAmount(''); }}>💵 Efectivo</button>

            <button className={`p-3 rounded-xl border-2 font-bold text-sm transition-all ${paymentMethod === 'tarjeta' ? 'bg-lucas-pink border-lucas-pink text-white shadow-[0_0_15px_#FF00C7]' : 'bg-[#1A103C] border-gray-700 text-gray-400 hover:border-gray-500'}`} onClick={() => setPaymentMethod('tarjeta')}>💳 Tarjeta</button>
        </div>

        {paymentMethod === 'efectivo' && (
            <div className={`mb-8 p-4 rounded-xl border transition-all duration-300 ${errorMsg && !cashAmount ? 'bg-red-500/20 border-red-500 animate-pulse' : 'bg-yellow-500/10 border-yellow-500/30'}`}>
                <label className="block text-yellow-400 font-bold text-sm mb-2">¿Con cuánto vas a pagar? (Para llevar cambio) *</label>
                <div className="flex items-center gap-2">
                    <span className="text-2xl text-white font-display">$</span>
                    <input id="input-cash" type="number" inputMode="numeric" placeholder="Ej: 200" className="w-full bg-transparent text-white text-xl border-b-2 border-yellow-500 focus:outline-none p-2 placeholder-gray-600" value={cashAmount} onInput={(e) => setCashAmount(e.target.value)} />
                </div>
                {cashAmount && parseFloat(cashAmount) >= total && <p className="text-green-400 text-sm mt-2 font-bold animate-pulse">✅ Cambio a recibir: ${parseFloat(cashAmount) - total}</p>}
                {cashAmount && parseFloat(cashAmount) < total && <p className="text-red-400 text-sm mt-2 font-bold">⚠️ Faltan: ${total - parseFloat(cashAmount)}</p>}
            </div>
        )}

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-6 border-t border-gray-800">
            <div className="text-center md:text-left">
                <span className="block text-gray-400 font-bold text-sm uppercase">Total Aprox:</span>
                <span className="text-5xl font-display text-lucas-fire drop-shadow-[0_0_10px_rgba(255,77,0,0.5)]">${total}</span>
            </div>
            <button onClick={sendToWhatsapp} className="w-full md:w-auto bg-[#25D366] hover:bg-[#1da864] text-white font-bold py-4 px-12 rounded-full transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transform hover:-translate-y-1">
                <span className="text-2xl">📱</span> ENVIAR PEDIDO POR WHATSAPP
            </button>
        </div>
        
        <div className="text-center mt-6">
            <button onClick={clearCart} className="text-xs text-red-500 hover:text-red-400 underline opacity-50 hover:opacity-100 transition-opacity">Vaciar carrito y empezar de nuevo</button>
        </div>
      </div>
    </div>
  );
}