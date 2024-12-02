import React, { useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import FooterComponent from "./components/Footer";
import Header from "./components/Header";

const App: React.FC = () => {
  const [movies] = useState([
    {
      id: 1,
      title: "Blame!",
      genre: "Ciencia Ficción, Acción, Drama",
      image: "blame.jpg",
      image2: "blame!2.webp",
      cast: "Sora Amamiya (Cibo), Kana Hanazawa (Sana-kan), Takahiro Sakurai (Killy)",
      year: 2017,
      duration: 106,
      description:
        "En un futuro distópico, un solitario luchador busca una manera de salvar a la humanidad en una ciudad megastructural.",
      director: "Hiroyuki Seshita",
      linkTrailer: "https://www.youtube.com/embed/U1LUIfE7CHE",
    },
    {
      id: 2,
      title: "Interstellar",
      genre: "Ciencia Ficción, Aventura, Drama",
      image: "interstellar.jpg",
      image2: "interstellar2.jpg",
      cast: "Matthew McConaughey (Cooper), Anne Hathaway (Brand), Jessica Chastain (Murph adulta), Michael Caine (Professor Brand), Matt Damon (Mann)",
      year: 2014,
      duration: 169,
      description:
        "Un grupo de exploradores viaja a través de un agujero de gusano en el espacio en un intento de asegurar el futuro de la humanidad.",
      director: "Christopher Nolan",
      linkTrailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
    },
    {
      id: 3,
      title: "Pacific Rim",
      genre: "Acción, Ciencia Ficción, Aventura",
      image: "pacificRim.jpg",
      image2: "pacificRim2.jpg",
      cast: "Charlie Hunnam (Jaeger Pilot Raleigh Becket), Idris Elba (Stacker Pentecost), Rinko Kikuchi (Mako Mori), Charlie Day (Dr. Newton Geiszler), Burn Gorman (Dr. Hermann Gottlieb)",
      year: 2013,
      duration: 131,
      description:
        "Los humanos construyen gigantescos robots pilotados para luchar contra monstruos colosales que emergen del océano.",
      director: "Guillermo del Toro",
      linkTrailer: "https://www.youtube.com/embed/A85EtOalcsM",
    },
    {
      id: 4,
      title: "El Viaje de Chihiro",
      genre: "Animación, Fantasía, Aventura",
      image: "elViajeDeChihiro.jpeg",
      image2: "elViajeDeChihiro2.webp",
      cast: "Rumi Hiiragi (Chihiro Ogino), Miyu Irino (Haku), Mari Natsuki (Yubaba), Tsunehiko Kamijō (Kamaji), Bunta Sugawara (Kohaku River Spirit)",
      year: 2001,
      duration: 125,
      description:
        "Una niña pequeña entra en un mundo mágico gobernado por dioses, brujas y espíritus, y donde los humanos se transforman en bestias.",
      director: "Hayao Miyazaki",
      linkTrailer: "https://www.youtube.com/embed/5Fgq4Osh6XQ",
    },
    {
      id: 5,
      title: "Van Helsing",
      genre: "Terror, Acción, Aventura",
      image: "vanHelsing.jpg",
      image2: "vanHelsing2.jpeg",
      cast: "Hugh Jackman (Gabriel Van Helsing), Kate Beckinsale (Anna Valerious), Richard Roxburgh (Dracula), David Wenham (Carl), Shuler Hensley (Frankenstein's Monster)",
      year: 2004,
      duration: 131,
      description:
        "El legendario cazador de monstruos Van Helsing es enviado a Transilvania para detener al conde Drácula, que está usando la investigación del Dr. Frankenstein y un hombre lobo para un siniestro propósito.",
      director: "Stephen Sommers",
      linkTrailer: "https://www.youtube.com/embed/HvFQv-0p0B0",
    },
    {
      id: 6,
      title: "Contra lo Imposible",
      genre: "Drama, Biografía, Deporte",
      image: "contraLoImposible.jpeg",
      image2: "contraLoImposible2.jpg",
      cast: "Christian Bale (Ken Miles), Matt Damon (Carroll Shelby), Caitriona Balfe (Mollie Miles), Jon Bernthal (Lee Iacocca)",
      year: 2019,
      duration: 152,
      description:
        "Los diseñadores de automóviles estadounidenses intentan construir un coche revolucionario para destronar al dominante Ferrari en las 24 Horas de Le Mans de 1966.",
      director: "James Mangold",
      linkTrailer: "https://www.youtube.com/embed/I3h9Z89U9ZA",
    },
    {
      id: 7,
      title: "Green Book",
      genre: "Biografía, Drama, Comedia",
      image: "greenBook.jpg",
      image2: "greenBook2.jpeg",
      cast: "Viggo Mortensen (Tony Lip), Mahershala Ali (Dr. Don Shirley), Linda Cardellini (Dolores 'Dolly' Vallelonga)",
      year: 2018,
      duration: 130,
      description:
        "Un pianista clásico afroamericano contrata a un rudo italoamericano para que sea su conductor y guardaespaldas durante una gira por el sur de Estados Unidos en los años 60.",
      director: "Peter Farrelly",
      linkTrailer: "https://www.youtube.com/embed/QkZxoko_HC0",
    },
    {
      id: 8,
      title: "Greenland",
      genre: "Suspenso, Ciencia Ficción, Acción",
      image: "greenland.jpg",
      image2: "greenLand2.jpeg",
      cast: "Gerard Butler (John Garrity), Morena Baccarin (Allison Garrity), Scott Glenn (Mitchell), David Denman (Duncan)",
      year: 2020,
      duration: 119,
      description:
        "Una familia lucha por sobrevivir mientras un cometa mortal se acerca a la Tierra, causando eventos catastróficos en todo el planeta.",
      director: "Ric Roman Waugh",
      linkTrailer: "https://www.youtube.com/embed/vz-gdEL_ae8",
    },
    {
      id: 9,
      title: "Gladiador",
      genre: "Acción, Drama, Aventura",
      image: "gladiador.jpeg",
      image2: "gladiador2.jpg",
      cast: "Russell Crowe (Maximus Decimus Meridius), Joaquin Phoenix (Commodus), Connie Nielsen (Lucilla), Oliver Reed (Proximo)",
      year: 2000,
      duration: 155,
      description:
        "Un general romano es traicionado y sus padres son asesinados por un emperador corrupto. Lucha como gladiador para vengar a su familia y restaurar la justicia en Roma.",
      director: "Ridley Scott",
      linkTrailer: "https://www.youtube.com/embed/P5ieIbInFpg",
    },
    {
      id: 10,
      title: "Koe no Katachi",
      genre: "Animación, Drama, Romance",
      image: "koeNoKatachi.jpg",
      image2: "koeNoKatachi2.jpeg",
      cast: "Miyu Irino (Shouya Ishida), Saori Hayami (Shouko Nishimiya), Aoi Yūki (Yuzuru Nishimiya), Yūki Kaji (Tomohiro Nagatsuka), Megumi Han (Miki Kawai)",
      year: 2016,
      duration: 130,
      description:
        "Un joven intenta redimirse después de haber intimidado a una chica sorda en su infancia. La historia aborda temas como la redención, el perdón y la aceptación.",
      director: "Naoko Yamada",
      linkTrailer: "https://www.youtube.com/embed/LYnL1BjbFvQ",
    },
    {
      "id": 11,
      "title": "Dragon Ball Super: Broly",
      "genre": "Acción, Fantasía, Ciencia Ficción",
      "image": "broly.jpg",
      "image2": "broly2.jpg",
      "cast": "Masako Nozawa (Goku), Ryō Horikawa (Vegeta), Ryusei Nakao (Frieza), Bin Shimada (Broly), Aya Hisakawa (Bulma)",
      "year": 2018,
      "duration": 100,
      "description": "Goku y Vegeta enfrentan al poderoso Broly, un saiyajin desconocido cuya fuerza desafía todas las expectativas.",
      "director": "Tatsuya Nagamine",
      "linkTrailer": "https://www.youtube.com/embed/3s32vFlFQvc"
    },
    {
      "id": 12,
      "title": "One Piece Film: Red",
      "genre": "Aventura, Fantasía, Acción",
      "image": "onePiece.jpeg",
      "image2": "onePiece2.webp",
      "cast": "Mayumi Tanaka (Monkey D. Luffy), Shuichi Ikeda (Shanks), Kaori Nazuka (Uta), Kazuya Nakai (Roronoa Zoro), Akemi Okamura (Nami)",
      "year": 2022,
      "duration": 115,
      "description": "Uta, la diva mundialmente famosa y hija de Shanks, realiza su primer concierto en la Isla de la Música, revelando secretos impactantes.",
      "director": "Gorō Taniguchi",
      "linkTrailer": "https://www.youtube.com/embed/77LTrVyPI60"
    },
  ]);
  return (
    <>
      <Header />
      <div className="app-container">
        {/* <h1 className="app-title">🎬 Movie List</h1> */}
        <MovieList movies={movies} />
      </div>
      <FooterComponent />
    </>
  );
};

export default App;
