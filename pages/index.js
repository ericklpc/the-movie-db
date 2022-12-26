import Head from 'next/head'
import Nav from '../components/Nav'
import { useEffect } from 'react'
import PopularMovies from '../components/PopularMovies'
import Trending from '../components/Trending'

export default function Home({popularMovies, trendingMovies}) {
  useEffect( () => { document.querySelector("body").classList.add("dark") } );
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="dark">
        <div className="dark:bg-black text-white dark:w-full">
          <Nav />
          <PopularMovies popularMovies={popularMovies}/>
          <Trending trendingMovies={trendingMovies}/>
        </div>
      </div>
    </>
  )
}


export async function getStaticProps() {
  const resPopular = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=d8e4774e3a32c70b57548a8243ab6f55`);
  const popularMovies = await resPopular.json();
  
  const resTrending = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=d8e4774e3a32c70b57548a8243ab6f55`);
  const trendingMovies = await resTrending.json();

  if(resPopular.ok) {
    return {
      props: {
        popularMovies: popularMovies.results,
        trendingMovies: trendingMovies.results
      },
    }
  }
}
