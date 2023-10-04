import React from 'react'
// import items from './items'

// export default function NewProduct({handleProductClick}){
export default function NewProduct({items,handleProductClick,addToWish}){
    return(
        <>
        {/* Products */}
  <section>
    <div className="container my-5">
      <header className="mb-4">
        <h3>New products</h3>
      </header>
      <div className="row">
      {items.slice(0, 8).map((item) => (
        <div className="col-lg-3 col-md-6 col-sm-6" key={item.id}>
          <div className="card my-2 shadow-0">
            <a style={{cursor:"pointer"}} className onClick={() => handleProductClick(item.id)}>
              <div className="mask" style={{"height":"50px"}}>
                <div className="d-flex justify-content-start align-items-start h-100 m-2">
                {item.id <3 && (
                    <h6>
                      <span className="badge pt-1" style={{ backgroundColor: item.colr }}>
                        {item.spane}
                      </span>
                    </h6>
                  )}
                </div>
              </div>
              <img src={item.image} className="card-img-top rounded-2" style={{"aspect-ratio":"1 / 1"}} />
            </a>
            <div className="card-body p-0 pt-3">
              <a  className="btn btn-light border px-2 pt-2 float-end icon-hover" onClick={() => addToWish(item)}><i className="fas fa-heart fa-lg px-1 text-secondary" /></a>
              <h5 className="card-title">{item.price}</h5>
              <p className="card-text mb-0">{item.name}</p>
              <p className="text-muted">
               {item.description}
              </p>
            </div>
          </div>
        </div>
))}
      </div>
    </div>
  </section>
        </>
    )
}