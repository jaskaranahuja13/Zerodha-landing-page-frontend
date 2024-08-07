import React from 'react'

function Team() {
  return (
    <div className="container">
    <div className="row p-5  border-top">
      <h1 className="text-center   ">
       People
      </h1>
    </div>
    <div className="row p-5  text-muted " style={{lineHeight:"1.8",fontSize:"1.2em"}}>
      <div className="col p-5 text-center">
       <img className='my-3 ' src='media/images/IMG_4706.jpeg' style={{width:"70%",borderRadius:"100%"}}/>
       <h4 className='mt-3'>Jaskaran Singh Ahuja</h4>
       <h6>Founder , CEO</h6>
      </div>
      
      <div className="col p-5 ">
      <p>
      Jaskaran has developed a sophisticated clone of Zerodha, a well-known online stock trading platform. This project leverages the MERN stack to deliver a robust, scalable, and efficient web application tailored for stock market enthusiasts and traders.
        </p>
        <p>
         
        Jaskaran, a graduate from Thapar Institute of Engineering and Technology with a BE in Computer Engineering.
        </p>
        <p>
        Playing with code is his zen.
        </p>
        <p>
          Connect on <a href=''  style={{textDecoration:"none"}}>Homepage</a> / <a href=""style={{textDecoration:"none"}}>TradingQ&A</a> /{" "} <a href=''style={{textDecoration:"none"}}>Twitter</a>
        </p>
      </div>
    </div>
  
  </div>
  )
}

export default Team