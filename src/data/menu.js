// src/data/menu.js

export const menuCategories = [
    {
      id: 'hamburguesas',
      title: 'HAMBURGUESAS',
      icon: '🍔',
      note: 'Todas son de 100g en crudo',
      items: [
        { name: 'Salchi Burger', price: '$109', desc: 'Carne natural, salchicha frita, queso Oaxaca, jamón frito, lechuga, jitomate, cebolla, picante y pepinillos.' },
        { name: 'Chori Burger Argentino', price: '$119', desc: 'Carne natural, chorizo argentino asado, queso Oaxaca, jamón frito + papas a la francesa.' },
        { name: 'Big Monster Lucas', price: '$199', desc: 'DOBLE carne, DOBLE queso, DOBLE jamón en tres panes brioche, coronada con aros de cebolla. + Papas y Nachos.' },
        { name: 'Hawaiana Burger', price: '$109', desc: 'Carne natural, queso Oaxaca, jamón, piña natural frita. Decorada con una cereza. + Papas.' },
        { name: 'Pechuga Burger BBQ', price: '$129', desc: 'Medallón de pollo frito empanizado con panko, jamón, queso Oaxaca y salsa BBQ. + Nachos.' },
        { name: 'Pizza Burger', price: '$119', desc: 'Carne natural, queso Oaxaca, pepperoni y aderezo mayochipotle. + Papas.' },
      ]
    },
    {
      id: 'alitas',
      title: 'ALITAS & BONELESS',
      icon: '🍗',
      note: 'Salsas: BBQ, Mango Habanero, Cajun, Habanero Solo',
      items: [
        { name: 'Boneless Individual', price: '$99', desc: '6 piezas sobre cama de lechuga, con apio, zanahoria y aderezo ranch.' },
        { name: 'Boneless Para Compartir', price: '$199', desc: '15 piezas con bastones de apio y aderezo ranch.' },
        { name: 'Alitas (Orden 6)', price: '$85', desc: 'Bañadas en tu salsa favorita, con verdura y ranch.' },
        { name: 'Alitas (Orden 15)', price: '$169', desc: 'Para los de buen diente. Bañadas en tu salsa favorita.' },
        { name: 'Costillas (Orden 6)', price: '$95', desc: 'Costillitas de cerdo bañadas en salsa.' },
        { name: 'Costillas (Orden 15)', price: '$199', desc: 'La orden grande de costillas con verdura y ranch.' },
      ]
    },
    {
      id: 'hotdogs',
      title: 'HOT DOGS',
      icon: '🌭',
      note: '¡Todas las órdenes incluyen 2 piezas!',
      items: [
        { name: 'Hot Clásico', price: '$79', desc: 'Salchicha Frankfurt, mayochipotle, jitomate, cebolla. + Nachos.' },
        { name: 'La Momia', price: '$89', desc: 'Salchicha envuelta en tocino, mayonesa, vegetales. + Nachos.' },
        { name: 'Chili Dog', price: '$99', desc: 'Con chili casero delicioso, jitomate y cebolla. + Papas.' },
        { name: 'Hot Burger Dog', price: '$119', desc: 'Salchicha Frankfurt + Carne de hamburguesa y queso Oaxaca. + Papas.' },
        { name: 'Hot Dog Lucas', price: '$159', desc: 'La especialidad: Tocino, aguacate, queso amarillo líquido. + Nachos.' },
      ]
    },
    {
      id: 'tacos',
      title: 'TACOS & BURRITOS',
      icon: '🌮',
      note: 'Tacos en maíz / Burritos en harina',
      items: [
        { name: 'Burrito Pecherón', price: '$119', desc: 'Arrachera, chistorra, queso panela, guacamole. + Papas y chile toreado.' },
        { name: 'Burrito Chicken', price: '$109', desc: 'Pechuga sazonada, morrón, cebolla, lechuga. + Nachos.' },
        { name: 'Burrito Campechano', price: '$119', desc: 'Bistec, longaniza, aguacate y queso Oaxaca. + Papas.' },
        { name: 'Tacos (Variedad)', price: '$29 - $39', desc: 'Arrachera ($39), Chistorra ($29), Pechuga ($29), Chorizo Argentino ($29). Todos con papas.' },
      ]
    },
    /* --- NUEVA SECCIÓN AGREGADA --- */
    {
      id: 'papas',
      title: 'CARTA LUCAS PAPAS',
      icon: '🥔',
      note: '¡El complemento perfecto!',
      items: [
        { name: 'Papas de Gajo', price: '$79', desc: 'Deliciosos trozos de papa en forma de gajo sazonadas con especias de la casa, acompañadas de queso amarillo y aderezo ranch.' },
        { name: 'Papas a la Francesa', price: '$59', desc: 'Las clásicas acompañadas con un toque personal bañadas en lemon pepper y cubiertas con una capa de queso amarillo líquido.' },
        { name: 'Papas con Chili', price: '$69', desc: 'Papas a la francesa crujientes bañadas en chili casero, coronadas con pico de gallo y acompañadas de queso amarillo líquido.' },
        { name: 'Las Favoritas de Lukas', price: '$79', desc: 'Crujientes papas a la francesa espolvoreadas con lemon pepper, bañadas en queso Oaxaca derretido y cobertura de tocino frito, acompañadas de queso amarillo líquido.', highlight: true },
      ]
    },
    /* ------------------------------ */
    {
      id: 'entradas',
      title: 'PARA BOTANEAR',
      icon: '🍟',
      note: 'Ideales para compartir',
      items: [
        { name: "Pa' Botanear (Familiar)", price: '$499', desc: '6 alitas, 6 boneless, 6 costillas, 4 dedos, 8 salchipulpos, 6 aros, papas, nachos y verdura. ¡BRUTAL!', highlight: true },
        { name: 'Dedos de Queso', price: '$89', desc: '6 piezas con bastones de zanahoria y ranch.' },
        { name: 'Aros de Cebolla', price: '$59', desc: '6 piezas sobre cama de nachos con queso amarillo.' },
        { name: 'Brocheta BBQ', price: '$129', desc: 'Costilla, pimiento, cebolla, piña/naranja y pepino.' },
        { name: 'Ensalada Boneless', price: '$149', desc: 'Mix verde, pepino, nuez, arándano, queso panela y 5 boneless.' },
      ]
    },
    {
      id: 'infantil',
      title: 'MENÚ INFANTIL',
      icon: '🧸',
      note: 'Para los peques',
      items: [
        { name: 'Salehipress', price: '$99', desc: 'Huevos revueltos con jamón, salchicha y 2 mini hot cakes.' },
        { name: 'Tralaleritos', price: '$99', desc: 'Dos mini hamburguesas con papas y pepino.' },
        { name: 'Krakeneitos', price: '$119', desc: 'Banderilla de salchipulpos sobre cama de papas.' },
      ]
    },
    {
      id: 'bebidas',
      title: 'BEBIDAS',
      icon: '🍺',
      note: 'Pregunta por la disponibilidad',
      items: [
        { name: 'Tritón (5L / 10L)', price: '$450 / $850', desc: 'De Cerveza o Azul (Blue).' },
        { name: 'Azulitos & Mojitos', price: '$90 - $100', desc: 'La especialidad de la casa.' },
        { name: 'Cervezas', price: '$45 - $90', desc: 'Media, Corona, Barril, Caguamas.' },
        { name: 'Botellas', price: '$750 - $850', desc: 'Red Label, Absolut, Bacardi Sabores.' },
        { name: 'Sin Alcohol', price: '$30 - $69', desc: 'Sodas Italianas ($69), Malteadas ($69), Refrescos ($30).' },
      ]
    }
  ];