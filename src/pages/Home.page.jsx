import React, { useEffect, useState } from 'react'
import axios from 'axios'
//Component
import EntertainmentCardSlider from '../components/Entertainment/EntertainmentCard.Component'
import HeroCarousal from '../components/HeroCarousal/HeroCarousal.Component'
import PosterSlider from '../components/PosterSlider/PosterSlider.Component'
//layout HOC
import DefaultLayoutHoc from '../layout/Default.layout'
const HomePage = () => {
    const [recommendedMovies, setRecommendedMovies] = useState([])
    const [premierMovies, setPremierMovies] = useState([])
    const [onlineStreamEvents, setOnlineStreamEvents] = useState([])
    useEffect(() => {
        const requestPopularMovies = async () => {
            const getPopularMovies = await axios.get("/movie/popular");
            setRecommendedMovies(getPopularMovies.data.results);
        };

        requestPopularMovies();
    }, []);

    useEffect(() => {
        const requestTopRatedMovies = async () => {
            const getTopRatedMovies = await axios.get("/movie/top_rated");
            setPremierMovies(getTopRatedMovies.data.results);
        };

        requestTopRatedMovies();
    }, []);

    useEffect(() => {
        const requestUpcomingMovies = async () => {
            const getUpcomingMovies = await axios.get("/movie/upcoming");
            setOnlineStreamEvents(getUpcomingMovies.data.results);
        };

        requestUpcomingMovies();
    }, []);
    return (
        <>
            <HeroCarousal />
            <div className='contianer mx-auto px-4 md:px-12 my-8'>
                <h1 className='text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3'>
                    The best of Entertainment</h1>
                <EntertainmentCardSlider />
            </div>
            <div className='contianer mx-auto px-4 md:px-12 my-8 '>
                <PosterSlider
                    title="Recommended Movies"
                    subtitle="List of recommende movies"
                    posters={recommendedMovies}
                    isDark={false}
                />
            </div>
            <div className="bg-premier-800 py-12">
                <div className='contianer mx-auto px-4 md:px-12 my-8 flex flex-col gap-3'>
                    <div className='hidden md:flex'>
                        <img src='https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png'
                            alt='Rupay' className='w-full h-full' />
                    </div>
                    <PosterSlider
                        title="Premiers"
                        subtitle="Brand new release every Friday "
                        posters={premierMovies}
                        isDark={true}
                    />
                </div>

            </div>
            <div className='contianer mx-auto px-4 md:px-12 my-8 '>
                <PosterSlider
                    title="Online Streaming Event"
                    subtitle="Brand new release every Friday "
                    posters={onlineStreamEvents}
                    isDark={false}
                />
            </div>
        </>

    )
}

export default DefaultLayoutHoc(HomePage)