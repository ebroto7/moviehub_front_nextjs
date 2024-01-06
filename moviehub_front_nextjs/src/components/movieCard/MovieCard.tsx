import { MovieType } from '@/types/movie.interface'
import './movieCard.css'

import React, { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { getMovieById } from '@/lib/movieApi'


type Props = {
    movieId: string | number
}

const MovieCard: FC<Props> = async ({ movieId }) => {
    const baseUrl = process.env.BASE_LOCALHOST_URL

    const movie: MovieType = await getMovieById(movieId)

    return (
        <>
            <div className="movieCardContainer" >
                {movie.poster != null  && 
                <Image
                    src={movie.poster!}
                    alt={movie.title}
                    width={200}
                    height={200}
                />}
                <div className="content">
                    {<h1>{`${movie.title} (${movie.year})`}</h1>}
                  
                    <p>{movie.description}</p>
                    <Link href={`${baseUrl}/home/movie/${movie.id}`}> Read More </Link>
                </div>
            </div>
        </>
    )
}

export default MovieCard