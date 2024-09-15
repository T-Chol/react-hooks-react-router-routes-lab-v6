import { useEffect, useState } from "react";
import NavBar from '../components/NavBar'; // Assuming NavBar goes in the header

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    // Fetch or define the list of directors here
    const fetchedDirectors = [
      { 
        name: "Director 1", 
        movies: ["Movie A", "Movie B", "Movie C"] 
      },
      { 
        name: "Director 2", 
        movies: ["Movie D", "Movie E"] 
      }
    ];
    setDirectors(fetchedDirectors);
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {directors.map((director, index) => (
          <article key={index}>
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map((movie, idx) => (
                <li key={idx}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
}

export default Directors;
