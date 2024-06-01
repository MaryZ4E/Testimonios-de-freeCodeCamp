import "./App.css"; // Importa los estilos CSS para la aplicación
import Testimonio from "./componentes/Testimonio"; // Importa el componente de testimonio

function App() {
  return (
    <div className="App">
      {" "}
      {/* Contenedor principal de la aplicación */}
      <div className="contenedor-principal">
        {" "}
        {/* Contenedor principal de la página */}
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>{" "}
        {/* Encabezado principal */}
        {/* Componentes Testimonio con diferentes propiedades */}
        <Testimonio
          nombre="Emma Bostian"
          pais="Suecia"
          imagen="emma"
          cargo="Ingeniera de Software"
          empresa="Spotify"
          testimonio="Excelente curso lo super recomiendo "
        />
        <Testimonio
          nombre="Shawn Wang"
          pais="Singapur"
          imagen="shawn"
          cargo="Ingeniero de Software"
          empresa="Amazon"
          testimonio="FreeCodeCamp cambió mi vida."
        />
        <Testimonio
          nombre="Sarah Chima"
          pais="Nigeria"
          imagen="sarah"
          cargo="Ingeniera de Software"
          empresa="ChatDesk"
          testimonio="Me volví más pro."
        />
      </div>
    </div>
  );
}

export default App; // Exporta el componente App para su uso en otros archivos
