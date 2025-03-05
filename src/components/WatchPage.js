import React from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {
    const [searchParams] = useSearchParams(); 
    const videoId = searchParams.get("v"); 
    const dispatch = useDispatch();
    dispatch(closeMenu());
    return (
        <div className='p-5'>
            <iframe
                width="1100"
                height="600"
                src={"https://www.youtube.com/embed/" + videoId +"?&autoplay=1"}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                aut    
            >

            </iframe>
        </div>
    )
}

export default WatchPage