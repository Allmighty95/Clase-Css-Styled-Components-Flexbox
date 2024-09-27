// Importa React y styled-components
import React from 'react';
import styled from 'styled-components';

// Crear el botón usando styled-components
const Button = styled.button`
  background-color: #4caf50; // Color de fondo verde
  color: white; // Color del texto en blanco
  padding: 10px 20px; // Espaciado interno (padding) del botón
  border: none; // Sin borde
  border-radius: 5px; // Bordes redondeados
  cursor: pointer; // Cambia el cursor a puntero al pasar por encima
  
  // Estilo para el estado hover (cuando el mouse está sobre el botón)
  &:hover {
    background-color: #45a049; // Cambia el color de fondo a un verde más oscuro
  }
`;

// Componente funcional principal de la aplicación
function App() {
  return (
    <div>
      {/* Renderiza el botón con el texto "Click me" */}
      <Button>Click me</Button>
    </div>
  );
}

// Exporta el componente para que pueda ser utilizado en otras partes de la aplicación
export default App;