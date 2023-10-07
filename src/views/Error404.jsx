import React from 'react'

function Error404() {
  return (
    <div className='p-4 mt-40 mb-28'>
        <div className='w-full'>
            <div className='h-[219px] flex flex-col items-center'>
                <h1 className='text-6xl font-playFair font-semibold'>404</h1>
                <h1 className='text-[34px] font-playFair font-medium'>Page Not Found</h1>
                <p className='text-lg font-lato'>Oops, it seems like the wedding bells are taking a break - we're on it!</p>
            </div>
            <button className='btnSolid w-full h-[52px]'>Back to Home</button>
        </div>
    </div>
  )
}

export default Error404

