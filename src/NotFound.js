import React from 'react'

function NotFound() {
  return (
    <div className='container p-5 my-5'>
        <div className='row flex'>
        <div className='col'>
        <img src='media/images/404notfound.png ' style={{width:"70%"}}></img>

        </div>
        <div className='col mt-5'>
            
        <h1 className='mt-5 text-primary' style={{fontSize:"400%"}}>404 Not Found</h1>
        <h3 className='my-3'> Sorry , the page you are looking for doesn't exist.</h3>
            </div>
        </div>
   
   </div>
  )
}

export default NotFound