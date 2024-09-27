// Componente funcional de React que crea un diseño de cuadrícula (grid)
function GridLayout() {
  return (
    // Contenedor principal que utiliza un diseño de cuadrícula con 3 columnas
    <div className="grid grid-cols-3 gap-4 p-4">
      {/* Primer elemento de la cuadrícula con fondo azul y texto blanco */}
      <div className="bg-blue-500 text-white p-6">Item 1</div>
      {/* Segundo elemento de la cuadrícula con fondo verde y texto blanco */}
      <div className="bg-green-500 text-white p-6">Item 2</div>
      {/* Tercer elemento de la cuadrícula con fondo rojo y texto blanco */}
      <div className="bg-red-500 text-white p-6">Item 3</div>
      {/* Cuarto elemento de la cuadrícula con fondo amarillo y texto blanco */}
      <div className="bg-yellow-500 text-white p-6">Item 4</div>
      {/* Quinto elemento de la cuadrícula con fondo púrpura y texto blanco */}
      <div className="bg-purple-500 text-white p-6">Item 5</div>
      {/* Sexto elemento de la cuadrícula con fondo rosa y texto blanco */}
      <div className="bg-pink-500 text-white p-6">Item 6</div>
    </div>
  );
}

// Exporta el componente para que pueda ser utilizado en otras partes de la aplicación
export default GridLayout;