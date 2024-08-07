import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore
  
}) {
  return (
    <div className="container mt-5 ">
      <div className="row my-5">
<div className='col-6 mt-5'>
  <div className="mt-2 p-5"></div>
<h1 className='mt-5 '>{productName}</h1>
<p>{productDescription}</p>
<div className='mb-5'>
<a style={{textDecoration:"none"}} className='mx-5' href={learnMore}>Learn More <i className='fa fa-long-arrow-right' aria-hidden="true"></i></a>
</div>


</div>

<div className='col-6 mt-5'>
      <img src={imageURL} />
</div>

      </div>
    </div>
  );
}

export default RightSection;
