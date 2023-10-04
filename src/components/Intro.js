import React from 'react'

export default function Intro({handleClick2}){
    return(
        <>
        {/* intro */}
  <section className="pt-3">
    <div className="container">
      <div className="row gx-3">
        <main className="col-lg-9">
          <div className="card-banner p-5 bg-primary rounded-5" style={{"height":"350px"}}>
            <div style={{"max-width":"500px"}}>
              <h2 className="text-white">
                Great products with <br />
                best deals
              </h2>
              <p className="text-white">The One Stop Destination for all your shopping needs. Avail great deals on all products.</p>
              <a className="btn btn-light shadow-0 text-primary" onClick={handleClick2}> View more </a>
            </div>
          </div>
        </main>
        <aside className="col-lg-3">
          <div className="card-banner h-100 rounded-5" style={{"background-color":"#f87217"}}>
            <div className="card-body text-center pb-5">
              <h5 className="pt-5 text-white">Amazing Gifts</h5>
              <p className="text-white">Gifts available for all Festive Seasons</p>
              <a className="btn btn-outline-light" onClick={handleClick2}> View more </a>
            </div>
          </div>
        </aside>
      </div>
      {/* row //end */}
    </div>
    {/* container end.// */}
  </section>
        </>
    )
}