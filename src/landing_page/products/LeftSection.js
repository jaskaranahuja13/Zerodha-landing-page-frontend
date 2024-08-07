import React from 'react'

function LeftSection({imageURL,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}) {
  return (
    <div className='container my-5'>
      <div className='row'>
      <div className='col-6 mt-2'>
      <img src={imageURL} />
</div>
<div className='col-6 mt-5'>
<h1 className='mt-5'>{productName}</h1>
<p>{productDescription}</p>
<div className='mb-4'>
<a style={{textDecoration:"none"}} href={tryDemo}>Try Demo <i className='fa fa-long-arrow-right' aria-hidden="true"></i></a>
<a style={{textDecoration:"none"}} className='mx-5' href={learnMore}>Learn More <i className='fa fa-long-arrow-right' aria-hidden="true"></i></a>
</div>
<div>
<a href={googlePlay}><img src='media/images/googlePlayBadge.svg'/></a>
<a href={appStore} className='mx-5'><img src='media/images/appstoreBadge.svg'/></a>
</div>

</div>
      </div>

    </div>
  )
}

export default LeftSection