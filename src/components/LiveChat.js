import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { getRandomElement, messages, names } from '../utils/constants';

const LiveChat = () => {
    const dispatch = useDispatch();
    const ChatMessages = useSelector(store => store.chat.messages)
    const [liveMessage, setLiveMessage] = useState([]);
    useEffect(() => {
        const i = setInterval(() => {
            dispatch(addMessage({
                name: getRandomElement(names),
                message: getRandomElement(messages)
            }))
        }, 2000); // Set interval to 2 seconds

        return () => clearInterval(i);
    }, []);

    return (
        <>
            <div className='w-full h-[600px] ml-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
                {ChatMessages.map((item, index) => (
                    <ChatMessage key={index} name={item.name} message={item.message} />
                ))}
            </div>
            <form className='w-full p-2 ml-2 border border-black'
                onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(addMessage({
                        name: "Pranay",
                        message: liveMessage
                    }))
                    setLiveMessage('');
                }}
            >
                <input
                    className='w-96'
                    type="text"
                    value={liveMessage}
                    onChange={(e) => setLiveMessage(e.target.value)}
                />
                <button className='px-2 mx-2 bg-green-300'>
                    Send
                </button>
            </form>
        </>
    )
}

export default LiveChat