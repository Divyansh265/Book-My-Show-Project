import React from 'react'
import DefaultLayoutHoc from '../layout/Default.layout'

//Components
import Poster from "../components/poster/poster.component"
import PlayFilter from '../components/PlayFilter/PlayFilter.Component'
const PlayPage = () => {
    return (
        <>
            <div className='container mx-auto px-4 my-10'>
                <div className='w-full flex  flex-col-reverse lg:flex-row-reverse gap-4'>
                    <div className='lg:w-3/4 p-4 bg-white rounded'>
                        <h2 className='text-2xl font-bold mb-4'>
                            Plays in NCR Delhi </h2>
                        <div className='flex flex-wrap '>
                            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center '>
                                <Poster isPlay={true}
                                    src="https://assets-in.bmscdn.com/nmcms/events/banner/weblisting/sunburn-arena-ft-dj-snake-gurgaon-et00337567-2022-8-18-t-18-39-38.jpg" title="Sunburn Arena ft. DJ SNAKE - Delhi NCR" subtitle="EDM | English | 6hrs" />
                            </div>
                            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                                <Poster isPlay={true}
                                    src="https://assets-in.bmscdn.com/nmcms/events/banner/weblisting/gaurav-gupta-live-new-content-et00321882-2022-8-10-t-10-59-32.jpg" title="Gaurav Gupta Live show go on for the- shake" subtitle="Comedy Shows | Hindi | 16yrs + | 1hr 30mins
" />
                            </div>
                            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                                <Poster isPlay={true}
                                    src="https://assets-in.bmscdn.com/nmcms/events/banner/weblisting/jaspreet-singh-live-et00334734-2022-8-1-t-12-41-20.jpg" title="With Love, Jaspreet. A standup comedy ." subtitle="Comedy Shows | Hindi, English | 16yrs + | 1hr 30mins" />
                            </div>
                            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                                <Poster isPlay={true}
                                    src="https://assets-in.bmscdn.com/nmcms/events/banner/weblisting/good-boy-better-show-ft-aashish-solanki-et00333391-2022-7-23-t-7-16-37.jpg" title="Good Boy Better Show ft.Aashish Solanki
" subtitle="Comedy Shows | Hindi, English | 16yrs + | 1hr 15mins" />
                            </div>


                        </div>
                    </div>
                    <div className='lg:w-1/4 p-4 bg-white rounded'>
                        <h2 className='text-2xl font-bold mb-4' >Filter</h2>
                        <div >
                            <PlayFilter title="Date" tags={["Today", "Tomorrow", "This Weekend"]} />
                        </div>
                        <div >
                            <PlayFilter title="Language" tags={["English", "Hindi", "Tamil"]} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DefaultLayoutHoc(PlayPage)