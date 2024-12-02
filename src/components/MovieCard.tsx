import React from "react"; // Importa React
import Swal from "sweetalert2"; // Importa SweetAlert2
import { Movie } from "../types/Movie"; // Importa la interfaz Movie

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  // Ruta dinámica para importar la imagen basada en el título
  const imageSrc = new URL(`../assets/img/${movie.image}`, import.meta.url).href;
  const imageSrc2 = new URL(`../assets/img/${movie.image2}`, import.meta.url).href;

  const showDetails = () => {
    Swal.fire({
      title: `<span class="swal-title">${movie.title}</span>`, // Clase personalizada para el título
      html: `<div class="swal-html">GENERO: ${movie.genre}<br>AÑO: ${movie.year}<br>DURACIÓN: ${movie.duration} min<BR>DIRECTOR: ${movie.director} <br>REPARTO: ${movie.cast}</div>`, // Clase personalizada para el contenido
      imageUrl: imageSrc,
      imageWidth: 300,
      imageAlt: `${movie.title} Poster`,
      confirmButtonText: "Ver Trailer...",
      cancelButtonText: "Cerrar", // Texto del botón de cierre
      showCancelButton: true, // Muestra el botón de cierre
      customClass: {
        confirmButton: 'swal-button', // Clase personalizada para el botón de confirmación
        cancelButton: 'swal-button-cancel' // Clase personalizada para el botón de cierre
      },
      preConfirm: () => {
        // Enlace del tráiler
        const trailerUrl = `${movie.linkTrailer}`;
        // Abre el enlace en una nueva ventana
        window.open(trailerUrl, '_blank');
      }
    });
};

  return (
    <div className="movie-card" onClick={showDetails}>
      <div className="image-container">
        <img src={imageSrc} alt={movie.title} className="movie-image" />
        <div className="movie-description">
          <img src={imageSrc2} alt={movie.title} className="movie-description-image" />
          <div className="text-content ">
            <span>{movie.description}</span>
            <span className="text-primary" > Más detalles...</span>
          </div>
        </div>
      </div>
      <h3>{movie.title}</h3>
      <p>{movie.genre}</p>
    </div>
  );
};

export default MovieCard;
