import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-3 " id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row p-3 m-5">
        <div className="col-6 p-5 ">
          <h1 className="fs-3">Search for an answer or browse help topics to create a ticket</h1>
          <input className="p-4 form-control" placeholder="Eg: how do I activate F&O, why is my order getting rejecting.." />
          <br />
          <a href="" className="m-2">Track account opening </a>
          <a href="" className="m-2">Track segment activation </a>
          <a href="" className="m-2">Intraday margins </a>
          <a href="" className="m-2">Kite user manual</a>
        </div>
        <div className="col-6 p-5" style={{lineHeight:"2.3"}}>
          <h1 className="fs-3" >Featured</h1>
          <ol>
            <li> <a href=""> MCX market will open at 10 AM [Resolved] </a></li>
            <li>  <a href=""> Surveillance measure on scrips - July 2024</a></li>
          </ol>
        
       
        </div>
      </div>
    </section>
  );
}

export default Hero;
