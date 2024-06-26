import { useSelector } from "react-redux"
import MovieList from './MovieList'
const GptMovieSuggestions = () => {
  const gpt=useSelector(store=>store.gpt)
  const {gptMovies}=gpt
  if(!gptMovies) return null;
  return (
    <div className="p-4 m-4 bg-black text-white opacity-90">
      <div>
    {gptMovies.map((movieName, index) => (
      <MovieList key={index} title={movieName.title} original_title={movieName.original_title} movies={gptMovies} />
    ))}
  </div>
    </div>
  )
}

export default GptMovieSuggestions