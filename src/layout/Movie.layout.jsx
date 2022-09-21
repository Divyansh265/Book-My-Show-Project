import React from 'react'
import MovieNavbar from '../components/navbar/MovieNavbar.Component'
import { MovieContext } from '../components/context/Movie.context'
import { useParams } from 'react-router-dom'
const MovieLayoutHoc = (Component) => ({ ...props }) => {


    return (<div>
        <MovieNavbar />
        <Component {...props} />
        <div>Footer</div>
    </div>
    )
}

export default MovieLayoutHoc