import React, { useEffect,} from "react";
import { connect } from "react-redux";

import { GetDataLibrary } from "../actionCreators/LibraryAction";
import ReadPng from "../inspirations-assets/read.png";

const ListBooks = (props) => {
  // PERLU TANYA
  useEffect(() => {
    props.GetDataLibrary();
  }, []);

// const ShowAddLibrary = () => {
//     props.ShowAddLibrary()
// };

  return (
    <div>

      <div className="container">
      <div className="row">

      {/* for (let index = 0; index < 5; index++) {
              const element = array[index];
              
          } */}
        
      {props.data.map((item, index) => {
          
            return(

          <div className="col-3" key={index}>
            <div class="card mb-3">
              <h3 class="card-header">{item.bookTitle}</h3>
              <img className="img-carousel" src={item.imageBook} alt="..." />
              <div class="card-body">
                <p class="card-text">
                <b> Status : </b> {item.status ? (<span className="dot bg-primary"></span>):(<span className="dot bg-success"></span>)}
            <br />
            <b> Year : </b> {item.years}
            <br />
            <b> Code : </b> {item.bookNumber}
                </p>
              </div>
            </div>
          </div>
                );
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

const mapDispatchToProps = { GetDataLibrary };

export default connect(mapStateToProps, mapDispatchToProps)(ListBooks);
