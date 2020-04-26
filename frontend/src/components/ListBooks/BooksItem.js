import React from "react";
import '../style.css'

const BooksItem = (props) => {
  return (
    <div className="col">
      <div class="card mb-3">
        <h3 class="card-header">{props.dataLibrary.bookTitle}</h3>
        <img className="img-carousel" src={props.dataLibrary.imageBook} alt="..." />
        <div class="card-body">
          <p class="card-text">
            <b> Status : </b> {props.dataLibrary.status ? (<span className="dot bg-primary"></span>):(<span className="dot bg-success"></span>)}
            <br />
            <b> Year : </b> {props.dataLibrary.years}
            <br />
            <b> Code : </b> {props.dataLibrary.bookNumber}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BooksItem;
