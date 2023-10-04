import React from 'react'

export default function Features({handleClick2}){
    return(
        <>
        {/* Features */}
  <section>
    <div className="container">
      <div className="card p-4 bg-primary">
        <div className="row align-items-center">
          <div className="col">
            <h4 className="mb-0 text-white">Best products and brands in store</h4>
            <p className="mb-0 text-white-50">Latest trendy poducts to suit your needs</p>
          </div>
          <div className="col-auto"><a className="btn btn-white text-primary shadow-0"  onClick={handleClick2}>Discover</a></div>
        </div>
      </div>
    </div>
  </section>
  {/* Features */}
        </>
    )
}