// Componente funcional de React que crea un diseño de cuadrícula responsivo
function ResponsiveGrid() {
  return (
    // Contenedor principal que utiliza un diseño de cuadrícula responsivo
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {/* Primer elemento de la cuadrícula con fondo azul y texto blanco */}
      <div className="bg-blue-500 text-white p-6">Box 1</div>
      {/* Segundo elemento de la cuadrícula con fondo verde y texto blanco */}
      <div className="bg-green-500 text-white p-6">Box 2</div>
      {/* Tercer elemento de la cuadrícula con fondo rojo y texto blanco */}
      <div className="bg-red-500 text-white p-6">Box 3</div>
      {/* Cuarto elemento de la cuadrícula con fondo amarillo y texto blanco */}
      <div className="bg-yellow-500 text-white p-6">Box 4</div>
    </div>
  );
}

// Exporta el componente para que pueda ser utilizado en otras partes de la aplicación
export default ResponsiveGrid;