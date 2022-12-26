import Movie from './Movie'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'



export default function Trending({trendingMovies}) {

  return (
    <div className="pb-40 w-full">
      <div className="px-10 md:px-0 md:container md:mx-auto mt-20">
          <div className="font-bold text-3xl mb-5">Trending Movies</div>
      </div>
      <ScrollMenu>
        {trendingMovies.map(movie => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </ScrollMenu>
    </div>
  )
}
