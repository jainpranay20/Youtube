import React from 'react'
import Button from './Button'

const ButtonList = () => {
    const buttonNames = ["All", "Songs", "Live", "Cricket", "Soccer", "Cooking", "News", "Gaming", "Technology", "Education"];

    return (
        <div className="flex">
            {buttonNames.map((name, index) => (
                <Button name={name} key={index}/>
            ))}
        </div>
    )
}

export default ButtonList