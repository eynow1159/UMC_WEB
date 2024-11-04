import Card from "../components/card.jsx";

import * as S from '../style/pages/movies.js'
import {useEffect, useState} from "react";
import axios from "axios";

const URL = import.meta.env.VITE_MOVIE_API_URL;
const TOKEN = import.meta.env.VITE_MOVIE_API_TOKEN;

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
        <S.CardList>
            {movies.data?.results.map((movie) => (
                <Card key={movie.id} movie={movie}/>
            ))}
        </S.CardList>
    )
};

export default MoviesPage;


