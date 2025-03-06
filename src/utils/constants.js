export const YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=AIzaSyAJWWU-ZOJdMyJGb_Z-kWZM4zlXl36lZq0"

export const YOUTTUBE_SEARCH_API ="https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="


// Ideally this should be in helper
export const names = ["Pranay jain", "John Doe", "Jane Smith", "Michael Brown", "Emily Johnson"];
export const messages = [
    "Hello, how are you?", 
    "Good morning!", 
    "What's up?", 
    "Have a great day!", 
    "Keep pushing forward!"
];

export function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

export const LIVE_CHAT_COUNT = 10;