import React from "react"; // Importa la biblioteca React
import "../hojas-de-estilo/Testimonio.css"; // Importa el archivo de estilos CSS

function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      {" "}
      {/* Contenedor principal del testimonio */}
      <img
        className="imagen-testimonio" // Clase para la imagen del testimonio
        src={require(`../imagenes/testimonio-${props.imagen}.png`)} // Ruta de la imagen del testimonio
        alt="Foto de Emma" // Texto alternativo para la imagen
      />
      <div className="contenedor-texto-testimonio">
        {" "}
        {/* Contenedor para el texto del testimonio */}
        <p className="nombre-testimonio">
          {" "}
          {/* Párrafo para el nombre del testigo */}
          <strong>{props.nombre}</strong> en {props.pais}{" "}
          {/* Nombre y país del testigo */}
        </p>
        <p className="cargo-testimonio">
          {" "}
          {/* Párrafo para el cargo del testigo */}
          {props.cargo} en <strong>{props.empresa}</strong>{" "}
          {/* Cargo y empresa del testigo */}
        </p>
        <p className="texto-testimonio">"{props.testimonio}"</p>{" "}
        {/* Párrafo para el testimonio */}
      </div>
    </div>
  );
}

export default Testimonio; // Exporta el componente Testimonio para su uso en otros archivos
