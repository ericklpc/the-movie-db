import getImagesPaths  from '../../utils/getImagesPaths'
import Nav from '../../components/Nav'
import { getYear } from '../../utils/getDate'
import { AiOutlineHeart } from "react-icons/ai"
import { BsPlay } from "react-icons/bs"


export default function movieId({movieDetails}) {
  console.log(movieDetails)
  // const {id, title, backdrop_path, poster_path, release_date, overview} = movieDetails

  const { id, genres, release_date, title, poster_path, backdrop_path, runtime, overview, belongs_to_collection} = movieDetails
  return (
    <div className="dark">
      <div className="dark:bg-black text-white">
        <div className="absolute w-full h-2/4 lg:h-screen overflow-hidden flex items-center">
          <img src={ getImagesPaths(backdrop_path) } alt={title} className="w-full h-full object-cover"/>
          <div className="absolute bottom-0 w-full h-3/4 bg-gradient-to-t from-black to-transparent"></div>
        </div>
        <Nav />
        <div className="relative">
        <div className=" container mx-auto mt-24 md:mt-80 p-4 lg:px-56 z-20 pb-24" >
          <div className="md:mt-8 md:grid md:gap-4 md:grid-cols-[150px_minmax(150px,_1fr)]">
            <img src={ getImagesPaths(poster_path) } alt={title} className="w-24 rounded-xl"/>
            <div>
              <div className="text-2xl font-semibold text-slate-200">{title}</div>
              <div className="mb-4">
                {genres.map(genre => (
                  <div className="mt-2 inline-block bg-slate-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2" key={genre.id}>
                  {genre.name}
                  </div>
                ))}
              </div>
              <div className="flex">
                <div className="border-slate-200 rounded-full border p-4 mr-4 cursor-pointer">
                  <BsPlay size={20} color={'#E2E8F0'} />
                </div>
                <div className="border-slate-200 rounded-full border p-4 cursor-pointer">
                  <AiOutlineHeart size={20} color={'#E2E8F0'} />
                </div>
              </div>
            </div>
            <div className="text-slate-200 font-semibold text-xl">
              <p>{getYear(release_date)}</p>
              <p>{runtime} mins</p>
            </div>
            <div>
              <p className="text-slate-400 font-light">{overview}</p>
            </div>
          </div>
          {belongs_to_collection && (
            <div className="text-slate-200 font-semibold text-xl mt-20">
              <p>{belongs_to_collection.name}</p>
              <img src={ getImagesPaths(belongs_to_collection.poster_path) } alt={title} className="w-24 rounded-xl mt-4"/>
            </div>
          )}
        </div>
        </div>
      </div>
    </div>
  ) 
}

export async function getServerSideProps({params}) {
  try {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${params.movie_id}?api_key=d8e4774e3a32c70b57548a8243ab6f55`);
    const data = await res.json();
    
    if(res.ok) {
      return {
        props: {
          movieDetails: data
        },
      }
    }
  } catch (e) {
      console.log(e);
  }

  
}
// export async function getStaticPaths() {
//     const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=d8e4774e3a32c70b57548a8243ab6f55`);
//     const data = await res.json();

//     const paths = data.results.map(movie =>{
//       return {
//         params: {
//           movie_id: movie.id.toString()
//         }
//       }
//     })

//     return {
//       paths,
//       fallback: true
//     };
//   }
// export async function getStaticProps({params}) {
//     try {
//       const res = await fetch(`https://api.themoviedb.org/3/movie/${params.movie_id}?api_key=d8e4774e3a32c70b57548a8243ab6f55`);
//       const data = await res.json();
      
//       if(res.ok) {
//         return {
//           props: {
//             movieDetails: data
//           },
//         }
//       }
//     } catch (e) {
//         console.log(e);
//     }
  
    
//   }
  