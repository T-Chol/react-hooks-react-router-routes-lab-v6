import { useEffect, useState } from "react";
import NavBar from '../components/NavBar';

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    // Fetch or define the list of actors here
    const fetchedActors = [
      { 
        name: "Actor 1", 
        movies: ["Movie A", "Movie B", "Movie C"] 
      },
      { 
        name: "Actor 2", 
        movies: ["Movie D", "Movie E"] 
      }
    ];
    setActors(fetchedActors);
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {actors.map((actor, index) => (
          <article key={index}>
            <h2>{actor.name}</h2>
            <ul>
              {actor.movies.map((movie, idx) => (
                <li key={idx}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
}

export default Actors;
