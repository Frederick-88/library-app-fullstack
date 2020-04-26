import React from "react";
import '../style.css'

import {connect} from 'react-redux'

import EditBookForm from "./BooksEdit"

const BooksItem = (props) => {
    
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
        <div>
        <EditBookForm/>
        </div>
      </div>
    </div>
  );
};

export default  connect(null,null)(BooksItem);
