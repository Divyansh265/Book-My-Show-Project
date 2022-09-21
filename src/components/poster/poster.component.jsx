import React from 'react'
import { Link } from "react-router-dom"
const MoviePoster = (props) => {
    return <Link to={`/movie/${props.id}`}>
        <div className='flex flex-col items-start gap-2 px-1 md:px-3 justify-center'>
            <div className='h-60 md:h-80'>
                <img src={`https://image.tmdb.org/t/p/original${props.poster_path}`}
                    alt="poster"
                    className="w-full h-full rounded-md"
                />
            </div>
            <div>
                <h3 className={`text-lg font-bold ${props.isDark ? "text-white" : "text-gray-700"}`}>
                    {props.title}</h3>

            </div>
        </div>
    </Link>

}
const PlayPoster = (props) => {
    return <a href='https://in.bookmyshow.com/events/suhani-shah-kahaani-india-tour/ET00337201' target='_blank'
        rel='noreferrer'>
        <div className='flex flex-col items-start gap-2 px-1 md:px-3 justify-center'>
            <div className='h-60 md:h-80'>
                <img src={props.src}
                    alt="poster"
                    className="w-full h-full rounded-md object-cover object-center"
                />
            </div>
            <div>
                <h3 className={`text-lg font-bold ${props.isDark ? "text-white" : "text-gray-700"}`}>
                    {props.title}</h3>

            </div>
        </div>
    </a>

}
const Poster = (props) => {
    if (props.isPlay) {
        return <PlayPoster {...props} />;
    }
    return <MoviePoster {...props} />;
}


export default Poster
