import React from "react";
import '../style.css'
import {Button} from 'react-bootstrap'

import {connect} from 'react-redux'

import {showEditForm, showDeleteForm} from "../../actionCreators/LibraryAction"

const BooksItem = (props) => {

    const showFormEdit = () => {
        props.showEditForm();
    }

    const showFormDelete = () => {
        props.showDeleteForm();
    }
    
  return (
    //   KALAU COL3- RAPI, GA RESPONSIVE. TANPA COL-3, RESPONSIVE, GA RAPI.
    <div className="col-3">
      <div class="card mb-3">
        <h3 class="card-header h4">{props.dataLibrary.bookTitle}</h3>
        <img className="img-carousel-2" src={props.dataLibrary.imageBook} alt="..." />
        <div class="card-body">
          <p class="card-text">
            <b> Status : </b> {props.dataLibrary.status ? (<span className="dot bg-primary"></span>):(<span className="dot bg-success"></span>)}
            <br />
            <b> Year : </b> {props.dataLibrary.years}
            <br />
            <b> Code : </b> {props.dataLibrary.bookNumber}
          </p>
        </div>
        <div className="text-center">
        <Button variant="info pl-2 pr-2 w-100" onClick={showFormEdit}>
        Edit Book Here !<i class="fas fa-pen-square pl-2"></i>
      </Button>
      <Button variant="primary pl-2 pr-2 w-100" onClick={showFormDelete}>
        DELETE BOOK<i class="fas fa-trash-alt pl-2"></i>
      </Button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
    showEditForm,
    showDeleteForm
}

export default  connect(null,mapDispatchToProps)(BooksItem);
