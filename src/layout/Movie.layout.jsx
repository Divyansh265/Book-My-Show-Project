import React from 'react'
import MovieNavbar from '../components/navbar/MovieNavbar.Component'

const MovieLayoutHoc = (Component) => ({ ...props }) => {
    return (<div>
        <MovieNavbar />
        <Component {...props} />
        <div>Footer</div>
    </div>
    )
}

export default MovieLayoutHoc