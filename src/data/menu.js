// src/data/menu.js

export const menuCategories = [
    {
      id: 'hamburguesas',
      title: 'HAMBURGUESAS',
      icon: '🍔',
      note: 'Todas son de 100g en crudo',
      items: [
        { name: 'Salchi Burger', price: '$109', desc: 'Jugosa Carne Natural De Hamburguesa, Salchicha Frita. Queso Oaxaca Derretido, Jamón Frito, Lechuga, Jitomate, Cebolla, Picante, Pepinillos Al Gusto Entre Dos Panes Brioche Untados Con Mayonesa Y Acompañada De Papas A La Francesa. '},
        { name: 'Chori Burger Argentino', price: '$119', desc: 'Jugosa Carne Natural De Hamburguesa ,Chorizo Argentino Asado, Queso Oaxaca Derretido, Jamón Frito, Lechuga, Jitomate, Cebolla, Picante Y Pepinillos Al Gusto Entre Dos Panes Brioche Untados Con Mayonesa Y Acompañada De Papas A La Francesa' },
        { name: 'Big Monster Lucas', price: '$199', desc: 'Dos Jugosas Carnes Naturales De Hamburguesa, Doble Porción De Queso Oaxaca Derretido, Doble Porción De Jamón Frito, Lechuga, Jitomate, Cebolla Picante Y Pepinillos Al Gusto. Entre Tres Panes Brioche Untados Con Mayonesa Coronados Con Dos Aros De Cebolla Y Acompañados De Una Porción De Papas A La Francesa Y Una Porción De Nachos.' },
        { name: 'Hawaiana Burger', price: '$109', desc: 'Jugosa Carne Natural De Hamburguesa, Queso Oaxaca Derretido, Jamón, Pina Natural Frita, Lechuga, Jitomate, Cebolla Picante Y Pepinillos Al Gusto. Entre Dos Panes Brioche Untados Con Mayonesa Y Decorados Con Una Deliciosa Cereza Acompañados De Papas A La Francesa ' },
        { name: 'Pechuga Burger BBQ', price: '$129', desc: 'Delicioso Medallón De Pollo Frito Y Empanizado Con Panko Jamón Y Queso Oaxaca Derretido Lechuga, Jitomate, Cebolla, Picante Y Pepinillos Al Gusto. Entre Dos Panes Brioche Untados Con BBQ Y Acompañado De Crujientes Nachos ' },
        { name: 'Pizza Burger', price: '$119', desc: 'Jugosa Carne Natural De Hamburguesa, Queso Oaxaca Derretido Jamón Frito, Lechuga, Jitomate, Cebolla, Picante, Pepinillos Al Gusto. Entre Dos Panes Brioche Untados Con Aderezo Mayochipotle Coronada Con Generoso Queso Oaxaca Derretido Y Pepperoni Acompañada De Papas A La Francesa' },
      ]
    },
    {
      id: 'alitas',
      title: 'ALITAS & BONELESS',
      icon: '🍗',
      note: 'Salsas: BBQ, Mango Habanero, Cajun, Habanero Solo',
      items: [
        { name: 'Boneless Individual', price: '$99', desc: '6 Crujientes Piezas De Boneless. Sobre Una Cama De Lechuga, Bañados En La Salsa De Tu Elección, Acompañados De Bastones De Apio Y Aderezo Ranch. ' },
        { name: 'Boneless Para Compartir', price: '$199', desc: '15 Crujientes Piezas De Boneless Bañadas En La Salsa De Tu Elección Acompañadas De Bastones De Apio Y Aderezo Ranch.' },
        { name: 'Alitas (Orden 6)', price: '$85', desc: 'Deliciosas Alitas Fritas. Banadas En La Salsa De Tu Elección, Acompañadas De Bastones De Zanahoria Y Apio Con Aderezo Ranch. ' },
        { name: 'Alitas (Orden 15)', price: '$169', desc: 'Deliciosas Alitas Fritas. Banadas En La Salsa De Tu Elección, Acompañadas De Bastones De Apio Y Zanahoria Con Un Toque De Aderezo Ranch.' },
        { name: 'Costillas (Orden 6)', price: '$95', desc: 'Seis Trozos De Costilla. Bañados En La Salsa De Tu Elección, Acompañados De Bastones De Apio Y Zanahoria Con Un Toque De Aderezo Ranch.' },
        { name: 'Costillas (Orden 15)', price: '$199', desc: 'Quince Trozos De Costilla. Bañados En La Salsa De Tu Elección, Acompañados De Bastones De Apio Y Zanahoria Con Un Toque De Aderezo Ranch.' },
      ]
    },
    {
      id: 'hotdogs',
      title: 'HOT DOGS',
      icon: '🌭',
      note: '¡Todas las órdenes incluyen 2 piezas!',
      items: [
        { name: 'Hot Clásico', price: '$79', desc: 'Tradicional Salchicha Frankfurt Entre Pan De Hot Dog Untado Con Aderezo Mayochipotle, Jitomate, Cebolla Y Picante; Acompañado De Una Porción De Nachos.' },
        { name: 'La Momia', price: '$89', desc: 'Tradicional Salchicha Frankfurt Envuelta En Tocino Entre Pan De Hot Dog Untado Con Mayonesa Cubierto De Jitomate Cebolla Y Picante Acompañados De Una Porción De Nachos.' },
        { name: 'Chili Dog', price: '$99', desc: 'Tradicional Salchicha Frankfurt Entre Pan De Hot Dog Juntado De Mayonesa Bañado En Nuestro Delicioso Chili Casero Con Jitomate Cebolla Y Picante Acompanado De Papas A La Francesa.' },
        { name: 'Hot Burger Dog', price: '$119', desc: 'Tradicional Salchicha Frankfurt Entre Un Pan De Hot Dog Untado De Aderezo Mayochipotle Coronado Con Carne De Hamburguesa Y Queso Oaxaca Con Jitomate Cebolla Y Picante Acompañado De Papas A La Francesa.' },
        { name: 'Hot Dog Lucas', price: '$159', desc: 'Tradicional Salchicha Frankfurt, Tocino, Queso Oaxaca, Aguacate Y Queso Amarillo Liquido Entre Un Pan De Hot Dog Untado Con Aderezo Mayochipotle Con Jitomate Cebolla Picante Coronado Con Papas A La Francesa Y Acompañado De Crujientes Nachos.' },
      ]
    },
    {
      id: 'burritos',
      title: 'BURRITOS',
      icon: '🌮',
      note: 'Burritos en harina',
      items: [
        { name: 'Burrito Pecherón', price: '$119', desc: 'Jugosa Carne De Arrachera, Chistorra, Queso Panela, Guacamole, Lechuga, Crema. Sobre Una Tortilla De Harina, Enrollado Con Tocino Y Acompañado De Papas A La Francesa Y Chile Toreados.', extraCheese: true },
        { name: 'Burrito Chicken', price: '$109', desc: 'Pechuga De Pollo Sazonada Con Especias, Chile Morrón, Cebolla, Lechuga, Crema. Sobre Una Tortilla De Harina Enrollada En Forma De Taco Acompañada De Nachos Crujientes.', extraCheese: true },
        { name: 'Burrito Campechano', price: '$119', desc: 'Jugoso Bistec De Res, Longaniza, Lechuga, Aguacate, Cebolla Y Queso Oaxaca. Sobre Una Tortilla De Harina Enrollado En Forma De Taco Acompañado De Papas A La Francesa.', extraCheese: true },
      ]
    },
        {
      id: 'tacos',
      title: 'TACOS',
      icon: '🌮',
      note: 'Tacos en maíz',
      items: [
        { name: 'Tacos de Arrachera', price: '$39', desc: 'Jugosa Carne De Arrachera Marinada Sobre Una Tortilla De Maíz Acompañada De Papas A La Francesa.', extraCheese: true },
        { name: 'Tacos de Chistorra', price: '$29', desc: 'Deliciosa Chistorra De La Casa Sobre Una Tortilla De Maíz Acompañada De Papas A La Francesa.', extraCheese: true },
        { name: 'Tacos de Pechuga', price: '$29', desc: 'Deliciosa Pechuga De Pollo Asada Sobre Una Tortilla De Maíz Acompañada De Papas A La Francesa.', extraCheese: true },
        { name: 'Tacos de Chorizo Argentino', price: '$35', desc: 'Delicioso Chorizo Argentino De La Casa Sobre Una Tortilla De Maíz Acompañado De Papas A La Francesa.', extraCheese: true },
        { name: 'Tacos de Aguaja', price: '$29', desc: 'Jugosa Aguja Norteña Sobre Una Tortilla De Maíz Acompañada De Papas A La Francesa.', extraCheese: true },
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
        { name: "Pa' Botanear (Familiar)", price: '$499', desc: 'Seis Alitas De Pollo, Seis Boneless, Seis Costillas, Cuatro Dedos De Queso, Ocho Salchipulpos, Seis Aros De Cebolla, Una Orden De Papas A La Francesa, Una Orden De Nachos, Bastones De Zanahoria, Bastones De Apio Con Un Toque De Queso Amarillo Y Aderezo Rancho Al Centro.', highlight: true },
        { name: 'Dedos de Queso 6Pz', price: '$89', desc: 'Crujientes Dedos De Queso Acompañados De Queso Amarillo Liquido Bastones De Zanahoria Y Un Toque De Aderezo Ranch.' },
        { name: 'Aros de Cebolla 6Pz', price: '$59', desc: 'Crujientes Piezas De Aros De Cebolla Sobre Una Cama De Nachos Acompañados De Queso Amarillo Y Aderezo Ranch. ' },
        { name: 'Brocheta BBQ', price: '$129', desc: 'Rica Brocheta De Costilla De Cerdo, Pimiento Morrón, Cebolla Frita, Piña O Naranja Y Pepino Bañada En Salsa De Su Elección.' },
        { name: 'Ensalada Boneless', price: '$149', desc: 'Mix De Hojas Verdes. Pepino, Zanahoria, Nuez, Queso Panela, Arándano Deshidratado Y Cinco Piezas De Boneles Naturales Acompanadas De El Aderezo De Su Elección.' },
        { name: 'Ensalada de Frutos Rojos', price: '$149', desc: 'Mix De Hojas Verdes. Fresa Portada En Finas Rodajas, Cereza Marroquí, Frambuesa, Zarzamora, Nuez Ajonjolí Caramelizado, Arándano Deshidratado Y Rodajas De Fruta De Temporada Coronada Con Una Deliciosa Pechuga Asada Acompañado De Su Aderezo Favorito.' },
      ]
    },
    {
      id: 'infantil',
      title: 'MENÚ INFANTIL',
      icon: '🧸',
      note: 'Para los peques',
      items: [
        { name: 'Salehipress', price: '$99', desc: 'Dos Divertidos Huevos Revueltos Con Jamón Tiras De Salchicha Frita Y Dos Deliciosos Mini Hot Cakes.' },
        { name: 'Tralaleritos', price: '$99', desc: 'Dos Mini Hamburguesitas Con Sus Deliciosas Papas Fritas Y Bastones De Pepino.' },
        { name: 'Krakeneitos', price: '$119', desc: 'Una Divertida Banderilla De Salchipulpos Y Crujientes Boneless Sobre Una Cama De Papas A La Frances.' },
      ]
    },
    {
      id: 'bebidas',
      title: 'BEBIDAS SIN ALCOHOL',
      icon: '🍺',
      note: 'Pregunta por la disponibilidad',
      items: [
      { name: 'Piñada', price: '$79', desc: 'Refrescante mezcla de piña y crema de coco, sin alcohol.' },
      { name: 'Ice Blue', price: '$69', desc: 'Nuestra bebida azul insignia, refrescante y frutal.' },

      { name: 'Malteada de Chocolate', price: '$69', desc: 'Clásica y cremosa, preparada con chocolate premium.' },
      { name: 'Malteada de Fresa', price: '$69', desc: 'Deliciosa combinación de fresas naturales y helado.' },
      { name: 'Malteada de Vainilla', price: '$69', desc: 'Suave y tradicional con un toque de esencia de vainilla.' },

      { name: 'Naranjada', price: '$49', desc: 'Preparada con naranja natural, ya sea natural o mineral.' },
      { name: 'Limonada', price: '$49', desc: 'El toque perfecto de limón, disponible en vaso o jarra.' },
      { name: 'Sangría', price: '$49', desc: 'Mezcla preparada con jarabe de uva y un toque de limón.' },
      { name: 'Tehuacán', price: '$49', desc: 'Agua mineral clásica, ideal para acompañar tus alimentos.' },

      { name: 'Arizona Preparado', price: '$49', desc: 'Té helado servido con hielos y un toque especial de la casa.' },
      { name: 'Arizona Sola', price: '$39', desc: 'Tu té Arizona favorito en presentación clásica.' },

      { name: 'Coca-Cola de Lata', price: '$35', desc: 'Refresco de 355ml bien frío.' },
      { name: 'Refescos Sabores', price: '$30', desc: 'Variedad de sabores disponibles para refrescarte.' },
      { name: 'Agua Embotellada', price: '$25', desc: 'Agua purificada para hidratarte.' },

      { name: 'Soda Italiana', price: '$69', desc: 'Agua mineral con jarabe frutal y perlas de sabor.' },
      { name: 'Heineken 0.0', price: '$49', desc: 'Todo el sabor de la malta, pero totalmente sin alcohol.' }
    ]
    },
        {
      id: 'bebidas',
      title: 'BEBIDAS CON ALCOHOL',
      icon: '🍺',
      note: 'Pregunta por la disponibilidad',
      items: [
      { name: 'Piña Colada', price: '$100', desc: 'Clásico tropical con ron, crema de coco y jugo de piña.' },
      { name: 'Blue Ice', price: '$90', desc: 'Coctel de la casa con un toque eléctrico de licor azul.' },

      { name: 'Mojito de Frutos Rojos', price: '$100', desc: 'Preparado con hierbabuena, ron y una selección de frutos rojos.' },
      { name: 'Mojito Tradicional', price: '$100', desc: 'La receta original: ron, hierbabuena fresca, azúcar y limón.' },
      { name: 'Mojito de Mango', price: '$100', desc: 'Refrescante combinación de ron con pulpa de mango natural.' },

      { name: 'Cervezas de Barril Natural', price: '$80', desc: 'Cerveza fresca de barril, servida directamente del grifo.' },
      { name: 'Cervezas de Barril Escarchada', price: '$90', desc: 'Servida en tarro helado con escarchado de sal o chile.' },
      { name: 'Cervezas Indio', price: '$45', desc: 'Botella de 355ml, la clásica cerveza oscura.' },
      { name: 'Cervezas Tecate', price: '$45', desc: 'Botella de 355ml, disponible en Roja o Light.' },
      { name: 'Cervezas Victoria', price: '$49', desc: 'Botella de 355ml, sabor tipo Viena muy mexicano.' },
      { name: 'Cervezas Corona', price: '$49', desc: 'Botella de 355ml, la cerveza más famosa del mundo.' }
    ]
    }
  ];