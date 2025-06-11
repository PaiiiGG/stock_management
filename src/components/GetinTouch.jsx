import React from 'react'

function GetinTouch() {
  return (
    <section className='bg-gray-800 text-white py-16 px-6 flex flex-col sm:flex-row gap-16'>
      <div className="container mx-auto">
        <h2 className='text-orange-500 text-7xl font-semibold'>KMITL</h2>
        <h2 className='text-4xl font-semibold'>Student Council</h2>
        <p className='text-lg mt-4 break-word'>I hope you're doing well and that your week has started off smoothly.
          I wanted to reach out and say thank you for your help with the project last week.
          Your support made a big difference, and I truly appreciate your time and effort.
          Let’s catch up sometime soon—maybe over coffee?</p>
      </div>
      <div className="container mx-auto flex flex-col">
        <h2 className='text-white text-4xl font-semibold mt-4'>Follow us</h2>
        <div className='bg-white text-black flex items-center w-70 px-6 py-2 gap-2 rounded-full mt-3 hover:bg-orange-600'>
          <img src="/public/pic/email.svg" alt="" className='h-5 w-5' />
          <a href="#">sckmitl@kmitl.ac.th</a>
        </div>
        <div className='bg-white text-black flex items-center w-70 px-6 py-2 gap-2 rounded-full mt-3 hover:bg-orange-600'>
          <img src="/public/pic/instagram.svg" alt="" className='h-5 w-5' />
          <a href="#">kmitlsc</a>
        </div>
        <div className='bg-white text-black flex items-center w-70 px-6 py-2 gap-2 rounded-full mt-3 hover:bg-orange-600'>
          <img src="/public/pic/facebook.svg" alt="" className='h-5 w-5' />
          <a href="#">KMITL Student Council</a>
        </div>
      </div>
    </section>
  )
}

export default GetinTouch
