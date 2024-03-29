
import { notFound } from 'next/navigation'

import { MovieType } from '@/types/movie.interface'
import { getMovieById } from '@/lib/api/movieApi/movieApi'
import styles from '../../home.module.css'
import MovieDetail from '@/components/movieDetail/MovieDetail'
import CommentsContainer from '@/components/commentsContainer/commentsContainer'

const MovieDetailPage = async ({ params }: { params: { movieId: string } }) => {

   const { movieId } = params
   const movie: MovieType = await getMovieById(movieId)

   if (!movie) notFound()

   return (
      <main className={styles.verticalContainer}>
         <h1 className={styles.movieTitle}> {movie.title} </h1>
         <div className={styles.inlineCointainer}>
            <article className={`${styles.articleContainer}, ${styles.glass}`}>
               <MovieDetail movie={movie} />
            </article >
            <article className={`${styles.articleContainer}, ${styles.glass}`}>
               <h2>User comments</h2>
               <CommentsContainer movie={movie}/>
            </article>
         </div>
      </main>
   )
}

export default MovieDetailPage


