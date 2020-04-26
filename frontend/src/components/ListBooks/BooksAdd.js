import React, { useState } from "react";
import { connect } from "react-redux";
import {Button, Modal} from 'react-bootstrap'

import { addBookLibrary } from "../../actionCreators/LibraryAction";

const AddDataLibrary = (props) => {

  const [showLibrary, setShowLibrary] = useState(false);

  const handleClose = () => setShowLibrary(false);
  const handleShow = () => setShowLibrary(true);

  const [data, setData] = useState({
    bookTitle: "",
    imageBook:"",
    years:"",
    bookNumber:"",
    status: false,
  })
  console.log(data);
  
  const handlePost = () => {
    props.addBookLibrary(data)
    handleClose()
  }

  const handleChange = (event) => {
    let { name,value,type,checked} = event.currentTarget;
    if (type == "checkbox" ){
      setData({
        ...data,
        [name]: checked,
      });
    } else {
      setData({
        ...data,
        [name]: value,
      });
    }
  }

  return (
    <div>
      <Button variant="primary btn-fx pl-3 pr-3" onClick={handleShow}>
        Add a new Book Here !<i class="fas fa-book-medical pl-3"></i>
      </Button>

      <Modal show={showLibrary} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Please Fill This Form To Add Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="form-group">
          <label for="title">Book Title</label>
          <input
            type="text"
            class="form-control"
            id="bookTitle"
            name="bookTitle"
            value={data.bookTitle}
            onChange={handleChange}
          />
        </div>
        <div class="form-group">
          <label for="year">URL of Book's Image</label>
          <input
            type="text"
            class="form-control"
            id="imageBook"
            name="imageBook"
            value={data.imageBook}
            onChange={handleChange}
          />
        </div>
        <div class="form-group">
          <label for="number">Year of Book</label>
          <input
            type="number"
            class="form-control"
            id="years"
            name="years"
            value={data.years}
            onChange={handleChange}
          />
        </div>
        <div class="form-group">
          <label for="number">Book's Code</label>
          <input
            type="number"
            class="form-control"
            id="bookNumber"
            name="bookNumber"
            value={data.bookNumber}
            onChange={handleChange}
          />
          
        </div>
        <small id="emailHelp" class="form-text pb-2 h6 text-primary">
              You can ask our Librarian for this code.
        </small>
        <div class="form-group">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="status"
              name="status"
              checked={data.status}
              onChange={handleChange}
            />
            <label class="form-check-label">
              Is it under loaning Duration?
            </label>
          </div>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handlePost}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
    
//   };
// };

const mapDispatchToProps = {
  addBookLibrary
};

export default connect(null, mapDispatchToProps)(AddDataLibrary);
