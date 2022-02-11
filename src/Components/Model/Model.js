import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "./Model.css";
const Model = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <>
      <button onClick={onOpenModal}>Open modal</button>
      <Modal open={open} onClose={onCloseModal} center>
        <div className="">
          <div className="">
            <h4 className="H1_style_model"> Rolling commisison</h4>
          </div>
          <div className="SetThe_Model">
            <p>Fancy</p>
            <span>0</span>
          </div>
          <div className="SetThe_Model">
            <p>Matka</p>
            <span>0</span>
          </div>
          <div className="SetThe_Model">
            <p>Casino</p>
            <span>0</span>
          </div>
          <div className="SetThe_Model">
            <p>Binary</p>
            <span>0</span>
          </div>
          <div className="SetThe_Model">
            <p>Sportbook</p>
            <span>0</span>
          </div>
          <div className="SetThe_Model">
            <p>Bookmarker</p>
            <span>0</span>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Model;
