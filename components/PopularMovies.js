import Movie from './Movie'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'


export default function PopularMovies({popularMovies}) {
  return (
    <div className="pb-16">
    <div className="md:container md:mx-auto mt-20">
        <div className="font-bold text-2xl mb-5">Popular Movies</div>
    </div>
    <ScrollMenu>
    {popularMovies.map(movie => (
      <Movie key={movie.id} movie={movie} />
    ))}
  </ScrollMenu>
  </div>
  )
}
