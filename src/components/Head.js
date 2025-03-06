import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {
    const dispatch = useDispatch();
    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResponse, setSearchResponse] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const searchCache = useSelector((store) => store.search);

    useEffect(() => {
        // make an api call after every key press
        const timer = setTimeout(() => {
            if (searchCache[searchQuery]) {
                setSearchResponse(searchCache[searchQuery]);
            } else {
                getSearchSuggestions();
            }
        }, 200);
        return () => clearTimeout(timer);
    }, [searchQuery])

    const getSearchSuggestions = async () => {
        const url = YOUTTUBE_SEARCH_API + searchQuery;
        // if (!searchQuery.trim()) return;
        const data = await fetch(url);
        const json = await data.json();
        setSearchResponse(json[1]);
        dispatch(cacheResults({
            [searchQuery]: json[1]
        }))
    }
    const handleClick = (item) => {
        console.log("Clicked item:", item); // Debugging
        setSearchQuery(item); // Update the input field
        setShowSuggestions(false); // Hide suggestions
    };
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
                    />

                </a>
            </div>
            <div className="col-span-10 px-14">
                <>
                    <input
                        className="px-5 w-1/2 border border-gray py-2 rounded-l-full"
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setShowSuggestions(true)}
                        onBlur={() => setTimeout(() => setShowSuggestions(false), 200)} // Delay hiding
                    />
                    <button className="p-2 border border-gray px-5 py-2 bg-gray-100 rounded-r-full">Search</button>
                </>
                {showSuggestions && searchResponse?.length > 0 && (
                    <div className='absolute bg-white py-2 w-1/3 shadow-lg rounded-lg border border-gray-100 hover:cursor-pointer'>
                        <ul>
                            {searchResponse.map((item, index) => (
                                <li onClick={() => handleClick(item)} className='py-1 shadow-sm px-2 hover:bg-gray-100' key={index}>
                                    🔍 {item}
                                </li>))}
                        </ul>
                    </div>
                )}
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