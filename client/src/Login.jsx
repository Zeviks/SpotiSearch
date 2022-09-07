import React from 'react'

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=e79d4d03b6f74afead1c56a539a9be6c&response_type=code&redirect_uri=http://localhost:5173&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

export const Login = () => {
  return (
    <div className='flex justify-center items-center min-h-screen'>
        <a className='text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 animate-bounce' href={ AUTH_URL }>
            Login With Spotify
        </a>
    </div>
  )
}
