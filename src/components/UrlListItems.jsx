import React from 'react'

function UrlListItems( {url}) {
  return (
    <>
     <div className='border border-transparent border-b-[#B4B4B4] gap-1  py-4 flex justify-between items-center'>
                    <div className='w-2/3'>
                     <h3 className='text-black font-bold'>Explore appliances, recipes and accessories from Usha Cook</h3>
                    <a href='#' className='text-[#00466E] mt-2 inline-block'>{url}</a>   
                    </div>
                    
                    <span className='text-[#B4B4B4] text-xs'>Last checked: 5 minutes ago</span>
                    <button className='px-10 py-4 rounded text-white bg-green-800'>Live </button>
    </div>
    </>
  )
}

export default UrlListItems
