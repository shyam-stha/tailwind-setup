import React, { FC } from 'react'

const Card: FC = () => {
    return (
        <div className='relative mt-10 flex h-72 w-64 flex-col items-center justify-center rounded-lg  bg-white shadow-lg shadow-orange-600'>
            <img
                src='https://media.istockphoto.com/id/846730696/photo/portrait-teenager.jpg?b=1&s=170667a&w=0&k=20&c=PNz3dsppr_Q0s_dNI_LaZdoY0oQtH812tvwZ13n-ods='
                alt='Potrait Image'
                className='absolute -top-10 h-32 w-32 rounded-md object-cover shadow-md shadow-green-900'
            />
            <div className='mt-16 flex flex-col items-center'>
                <h3 className='font-sans font-medium'>Alina Smith</h3>
                <h5 className='font-sans text-xs font-light text-gray-600'>
                    Senior UX/UI Designer
                </h5>

                <div className=' flex h-20 w-52 items-center justify-evenly'>
                    <div className='text-center'>
                        <h4 className='text-sm font-medium'>205</h4>
                        <h5 className='text-xs font-light'>Likes</h5>
                    </div>
                    <div className='text-center'>
                        <h4 className='text-sm font-medium'>10.5k</h4>
                        <h5 className='text-xs font-light'>Followers</h5>
                    </div>
                    <div className='text-center'>
                        <h4 className='text-sm font-medium'>20</h4>
                        <h5 className='text-xs font-light'>Following</h5>
                    </div>
                </div>
            </div>

            <div className='flex w-60 justify-evenly'>
                <button className='rounded-sm bg-red-400 py-2 px-5 text-white hover:bg-purple-400 hover:text-black'>
                    Follow
                </button>
                <button className='rounded-sm py-2 px-2 text-gray-700 ring-1 ring-green-500 hover:text-black hover:ring-fuchsia-700'>
                    Message
                </button>
            </div>
        </div>
    )
}

export default Card
