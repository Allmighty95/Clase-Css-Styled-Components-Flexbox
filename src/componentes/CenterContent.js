// Componente funcional de React que centra contenido en la pantalla
function CenterContent() {
  return (
    // Contenedor principal que centra el contenido horizontalmente y verticalmente
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {/* Contenedor del contenido centrado con fondo blanco, padding y sombra */}
      <div className="bg-white p-10 shadow-lg">
        {/* Título centrado con tamaño de texto grande y negrita */}
        <h1 className="text-3xl font-bold">Centered Content</h1>
      </div>
    </div>
  );
}

// Exporta el componente para que pueda ser utilizado en otras partes de la aplicación
export default CenterContent;