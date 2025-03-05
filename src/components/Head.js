import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';

const Head = () => {
    const dispatch = useDispatch();
    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }
    return (
        <div className='grid grid-flow-col p-3 m-2 shadow-lg'>
            <div className='flex col-span-1'>
                <img
                    className='h-8 cursor-pointer'
                    alt="menu"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/640px-Hamburger_icon.svg.png"
                    onClick={() => toggleMenuHandler()}
                />
                <a href="/">
                    <img
                        className='h-8 ml-2'
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
                        alt="youtube-logo"
                        onClick={() => window.location.href = "/"}
                    />

                </a>
            </div>
            <div className="col-span-10 px-14 flex justify-center items-center">
                <input className="w-1/2 border border-gray p-2 rounded-l-full" type="text" />
                <button className="p-2 border border-gray px-5 py-2 bg-gray-100 rounded-r-full">Search</button>
            </div>

            <div className='col-span-1'>
                <img
                    className='h-8'
                    src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
                    alt="user-icon"
                />
            </div>
        </div>
    )
}

export default Head