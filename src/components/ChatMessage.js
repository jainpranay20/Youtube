import React from 'react'

const ChatMessage = ({name, message}) => {
    return (
        <div>
            <img
                className='w-12 h-12'
                alt="user"
                src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
            />
            <span></span>
        </div>
    )
}

export default ChatMessage