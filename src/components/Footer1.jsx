import React from 'react'

function Footer() {
  return (
    <div className=' mt-5 px-10 text-xs text-[#505050]'>
      <p>This application is a test. It lets users add a list of URLs in local storage. Along with the URL it stores the Title of the page returned when fetching the contents of the URL. The Application then fetches the contents of each URL and checks the response type. If the response is 200 OK, it marks the URL as LIVE. If the response when getting the contents of the website throws an error, the application highlights the errored website in the list. The application does this every 5 minutes or ON DEMAND when the URL is clicked by the user. On reload, the website checks the local storage for the list of websites added and loads all of them again.</p>
      <p className='text-[#B4B4B4] mt-5'>Built for Cobold Digital by Siddharth Soni</p>
    </div>
  )
}

export default Footer
