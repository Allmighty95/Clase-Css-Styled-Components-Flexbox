// Componente funcional de React que crea un diseño de página completa
function FullLayout() {
  return (
    // Contenedor principal que utiliza un diseño de cuadrícula responsivo
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4">
      {/* Elemento principal de la cuadrícula que ocupa 2 columnas en pantallas grandes */}
      <div className="lg:col-span-2 bg-white p-6 shadow-lg">Main Content</div>
      {/* Elemento de la cuadrícula que representa la barra lateral */}
      <div className="bg-gray-200 p-6 shadow-lg">Sidebar</div>
      {/* Elemento de la cuadrícula que representa el pie de página */}
      <div className="bg-gray-300 p-6 shadow-lg">Footer</div>
    </div>
  );
}

// Exporta el componente para que pueda ser utilizado en otras partes de la aplicación
export default FullLayout;