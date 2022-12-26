import getImagesPaths from '../utils/getImagesPaths'
import { getYear } from '../utils/getDate'
import Link from 'next/link'

function Movie({movie}) {

  const {id, title, backdrop_path, poster_path, release_date, overview} = movie

  return (
    <Link href={'/movie/' + id}>
      <div className="cursor-pointer hover:scale-110 transition ease-in-out w-36 mr-2 lg:w-72 lg:mr-8 ">
          <img src={getImagesPaths(poster_path)} alt="movie poster" className="rounded-xl" />
          <div className="mt-2">
              <div className="font-semibold">{title}</div>
              <span className="text-gray-400 text-sm">{getYear(release_date)}</span>
          </div>
      </div>
    </Link>
  )
}

export default Movie