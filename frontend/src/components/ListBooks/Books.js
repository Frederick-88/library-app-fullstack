import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {Button, Modal} from 'react-bootstrap'

import { GetDataLibrary, ShowAddLibrary } from "../../actionCreators/LibraryAction";

import BooksItem from "./BooksItem";
import AddBookForm from "./BooksAdd"

const ListBooks = (props) => {
  // PERLU TANYA
  useEffect(() => {
    props.GetDataLibrary();
  }, []);

// const ShowAddLibrary = () => {
//     props.ShowAddLibrary()
// };

const [showLibrary, setShowLibrary] = useState(false);

const handleClose = () => setShowLibrary(false);
const handleShow = () => setShowLibrary(true);

  return (
    <div>

      <div className="container">
          <div className="d-flex flex-row flex-wrap mr-auto pt-4 pb-4">
        <h1 className="mr-auto text-primary">FD-LIBRARY BOOKS LISTS</h1>
        
        {/* <button type="button " onClick={ShowAddLibrary} class="btn btn-primary btn-fx pl-3 pr-3">
          Add a new Book Here !  
          <i class="fas fa-book-medical pl-3"></i>
        </button> */}
    <Button variant="primary btn-fx pl-3 pr-3" onClick={handleShow}>
    Add a new Book Here !
      <i class="fas fa-book-medical pl-3"></i>
    </Button>

    <Modal show={showLibrary} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Please Fill This Form To Add Book</Modal.Title>
      </Modal.Header>
      <Modal.Body><AddBookForm/></Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
        </div>

        <div className="row">
          {props.data.map((item, index) => {
            return <BooksItem key={index} dataLibrary={item}></BooksItem>;
          })}
        </div>
      </div>

    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.LibraryReducer.data,
  };
};

const mapDispatchToProps = { GetDataLibrary,ShowAddLibrary };

export default connect(mapStateToProps, mapDispatchToProps)(ListBooks);
