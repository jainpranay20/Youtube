import React from 'react'

const commentsData = [
    {
        name: "Pranay5",
        text: "Lorem ipsum",
        replies: []
    },
    {
        name: "Pranay1",
        text: "Lorem ipsum",
        replies: [
            {
                name: "Pranay1",
                text: "Lorem ipsum",
                replies: []
            },
            {
                name: "Pranay12",
                text: "Lorem ipsum",
                replies: []
            },
            {
                name: "Pranay12",
                text: "Lorem ipsum",
                replies: []
            },
        ]
    },
    {
        name: "Pranay2",
        text: "Lorem ipsum",
        replies: [
            {
                name: "Pranay",
                text: "Lorem ipsum",
                replies: []
            },
            {
                name: "Pranay",
                text: "Lorem ipsum",
                replies: [{
                    name: "Pranay",
                    text: "Lorem ipsum",
                    replies: [{
                        name: "Pranay",
                        text: "Lorem ipsum",
                        replies: [{
                            name: "Pranay",
                            text: "Lorem ipsum",
                            replies: [{
                                name: "Pranay",
                                text: "Lorem ipsum",
                                replies: [{
                                    name: "Pranay",
                                    text: "Lorem ipsum",
                                    replies: []
                                }]
                            }]
                        }]
                    },]
                },]
            },]
    },
];
const Comment = ({ data }) => {
    const { name, text, replies } = data;
    return (
        <div className='flex shadow-sm bg-gray-100 rounded-lg my-2'>
            <img
                className='w-12 h-12'
                alt="user"
                src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
            />
            <div className='px-2'>
                <p>{name}</p>
                <p>{text}</p>
            </div>
        </div>

    )
}

const CommentsList = ({ comments }) => {
    return comments.map((comment, index) => (
        <div key={index}>
            <Comment  data={comment} />
            <div className='pl-5 ml-5 border border-black'>
                <CommentsList key={index} comments={comment.replies} />
            </div>
        </div>)
    )

}
const CommentsContainer = () => {
    return (
        <div className='p-5 m-2'>
            <h1 className='2xl '>Comments:</h1>
            <CommentsList comments={commentsData} />
        </div>
    )
}

export default CommentsContainer;