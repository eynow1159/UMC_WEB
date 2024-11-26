import Card from "../components/card.jsx";

import * as C from "../style/components/contents.js";
import {useEffect, useState} from "react";
import axios from "axios";

const URL = process.env.REACT_APP_MOVIE_API_URL;
const TOKEN = process.env.REACT_APP_MOVIE_API_TOKEN;

console.log("API Token: ", TOKEN);

const MoviesPage = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const getMovies = async () => {
            try {
                const movies = await axios.get(URL, {
                    headers: {
                        Authorization: `Bearer ${ TOKEN }`
                    }
                });
                setMovies(movies);
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };
        getMovies();
    }, []);

    // Optional Chaining 활용
    return (
        <C.Container>
          <C.Title></C.Title>
          <C.Wrapper>
            {movies.data?.results.map((movie) => (
                <Card key={movie.id} movie={movie}/>
            ))}

          </C.Wrapper>
        </C.Container>
      )
};

export default MoviesPage;


