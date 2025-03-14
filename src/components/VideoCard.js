import React from 'react'

const VideoCard = ({info}) => {
    const {snippet, statistics} = info;
    const {channnelTitle, title, thumbnails} = snippet;

  return (
    <div className='p-2 m-2 w-64 shadow-lg'>
        <img
            className='rounded-lg'
            alt={title} 
            src={thumbnails?.medium?.url}
        />
        <ul>
            <li className='font-bold py-2'>{title}</li>
            <li>{channnelTitle}</li>
            <li>{statistics.viewCount} views</li>
        </ul>
    </div>
  )
}
// It's a higher order component  
export const AdVideoCard = ({info}) => {
    return <div className='p-1 m-1 border border-red'><VideoCard info={info}/></div>
}

export default VideoCard