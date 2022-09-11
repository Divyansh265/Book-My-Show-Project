import React, { useState } from 'react'
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

    return (
        <>
            <HeroCarousal />
            <div className='contianer mx-auto px-4 md:px-12 my-8'>
                <h1 className='text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3'>The best of Entertainment</h1>
                <EntertainmentCardSlider />
            </div>
            <div className='container mx-auto px-4 md:px-12 my-8'>
                <PosterSlider title="Recommended Movies"
                    subject="List of recommende movies"
                    posters={recommendedMovies}
                    isDark={false}
                />
            </div>
            <div className="bg-premier-800 py-12">
                <div className='container mx-auto px-4 md:px-12 my-8 flex-col gap-3'>
                    <div className='hidden md:flex'>
                        <img src='https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png' alt='Rupay' className='w-full h-full' />
                    </div>
                    <PosterSlider
                        title="Premiers"
                        subject="Brand new release every Friday "
                        posters={premierMovies}
                        isDark={true}
                    />
                </div>

            </div>
            <div className='container mx-auto px-4 md:px-12 my-8 flex-col gap-3'>
                <PosterSlider
                    title="Online Streaming Event"
                    subject="Brand new release every Friday "
                    posters={onlineStreamEvents}
                    isDark={false}
                />
            </div>
        </>

    )
}

export default DefaultLayoutHoc(HomePage)