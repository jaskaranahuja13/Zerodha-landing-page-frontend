import React from 'react'

function Universe() {
  return (
    <div className='container mt-5'>
      <div className='text-center row'>
      <h1 className='mt-5'>The Zerodha Universe</h1>
      <p>Extend your trading and investment experience even further with our partner platforms</p>
    
      
      <div className='col-4 mt-5'>
      <img src="media/images/smallcaseLogo.png" style={{width:'50%'}}></img>
      <p className='text-muted text-small mt-1' >Thermic investment platform</p>
    </div>
    <div className='col-4 mt-5'>
    <img src="media/images/streakLogo.png" style={{width:'40%'}}></img>
    <p className='text-muted text-small mt-1'>Algo & stratergy platform</p>

      </div>
      <div className='col-4 mt-5'>
      <img src="media/images/sensibullLogo.svg" style={{width:'60%'}}></img>
      <p className='text-muted text-small mt-2'>Option trading platform</p>

      </div>
      <div className='col-4 mt-5'>
      <img src="media/images/zerodhaFundhouse.png" style={{width:'50%'}}></img>
      <p className='text-muted text-small mt-1' >Asset management</p>
    </div>
    <div className='col-4 mt-5'>
    <img src="media/images/goldenpiLogo.png" style={{width:'40%'}}></img>
    <p className='text-muted text-small mt-1'>Bonds trading platform</p>

      </div>
      <div className='col-4 mt-5'>
      <img src="media/images/dittoLogo.png" style={{width:'28%'}}></img>
      <p className='text-muted text-small mt-1'>insurance</p>

      </div>
      <button className='btn btn-primary rounded-3 p-3 text-white fs-5 my-5' style={{width:"25%",margin:"0 auto"}}>Sign up Now</button>
      </div>
  
    </div>
  )
}

export default Universe