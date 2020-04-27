import React, { useEffect,} from "react";
import { connect } from "react-redux";

import { GetDataLibrary } from "../../actionCreators/LibraryAction";

import BooksItem from "./BooksItem";
import AddBookForm from "./BooksAdd"

import Edit from "./BooksEdit"
import Delete from "./BooksDelete"

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
          <div className="d-flex flex-row flex-wrap mr-auto pt-4 pb-4">
        <h1 className="mr-auto text-primary">FD-LIBRARY BOOKS LISTS</h1>
        
        {/* <button type="button " onClick={ShowAddLibrary} class="btn btn-primary btn-fx pl-3 pr-3">
          Add a new Book Here !  
          <i class="fas fa-book-medical pl-3"></i>
        </button> */}

        <AddBookForm/>
        </div>

        <div className="row">
          {props.data.map((item, index) => {
            return <BooksItem key={index} dataLibrary={item}></BooksItem>;
          })}
        </div>
      </div>
      <Edit/>
      <Delete/>

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
