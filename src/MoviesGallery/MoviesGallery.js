import MovieCard from "../MovieCard/MovieCard";
import { movies } from "../movies_data";

export default function MoviesGallery() {

    const moviesItems = movies.map(
        (movie) => <MovieCard key={movie.id} movie={movie}/>)

    return (
    <>
        {moviesItems}
    </>
    )
}