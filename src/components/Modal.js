import React from "react";
import Modal from "react-bootstrap/Modal";

export default function Modal1({show,handleClose,value1}) {
  return (
    <>
    {value1.trim().length===0 ? (
        <Modal show={show} onHide={handleClose}>
        <div class="modal-header">
          <h5 class="modal-title">ShopKaro</h5>
          <button
            type="button"
            class="btn-close"
            data-mdb-dismiss="modal"
            aria-label="Close" onClick={handleClose}
          ></button>
        </div>
        <div class="modal-body">
          <p>Invalid Coupon Code !!</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" onClick={handleClose}>
            Close
          </button>
        </div>
      </Modal>


         
    ):(
        <Modal show={show} onHide={handleClose}>
        <div class="modal-header">
          <h5 class="modal-title">ShopKaro</h5>
          <button
            type="button"
            class="btn-close"
            data-mdb-dismiss="modal"
            aria-label="Close" onClick={handleClose}
          ></button>
        </div>
        <div class="modal-body">
          <p>Congratulations your coupon has been applied !!</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" onClick={handleClose}>
            Close
          </button>
        </div>
      </Modal>

    )}
    
    </>
  );
}
