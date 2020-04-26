import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

// SUPAYA PENGGUNAAN MAPSTATE DAN DISPATCH BISA BERJALAN
import { connect } from "react-redux";

// IMPORT INI ADALAH UNTUK PENGGUNAAN DISPATCH TO PROPS
import { hideEditForm, editBookLibrary } from "../../actionCreators/LibraryAction";

const EditBookForm = (props) => {
 
    const [data, setData] = useState({
        bookTitle: "",
        imageBook:"",
        years:"",
        bookNumber:"",
        status: false,
      })
      console.log(data);

  // CERITANYA KITA BUAT FUNCTION DENGAN NAMA HANDLECHANGE --- FOLLOW MY CODE (HC01)
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
  // PROPS INI BERASAL DARI ACTION CREATORS DAN DARI SNA KITA NGAMBIL "SEMBUNYIKANTAMBAH".
  // LIHATLAH IsShowAdd PADA REDUCERS.
  const hideFormEdit = () => {
    props.hideEditForm();
  };

  const submitFormEdit = () => {
    console.log(data);
    props.editBookLibrary(data)
  }
  return (
    // MENGIKUTI ALUR DARI BOOTSTRAP.
    <Modal show={props.show} onHide={ hideFormEdit }>
        <Modal.Header closeButton>
          <Modal.Title>Please Fill This Form To Edit Book</Modal.Title>
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
          <Button variant="secondary" onClick={hideFormEdit}>
            Close
          </Button>
          <Button variant="primary" onClick={submitFormEdit}>
            Save Edit Changes
          </Button>
        </Modal.Footer>
      </Modal>
  );
};

// MAP INI KITA AMBIL DARI REDUCERS PADA GURU, KARENA HANYA DI REDUCERS KITA LEBIH PAKAI STATE.
// DISINI KITA MEMBUAT YANG DIATAS PROPS.SHOW MENJADI MENGGUNAKAN IsShowAdd. SEHINGGA BISA MNCUL
// LALU NENGOK AJA FUNCTION HIDE, ITU LAH PENGGUNAAN YANG TERJADI. HIDE DAN MUNCULKAN
const mapStateToProps = (state) => {
  return {
    show: state.LibraryReducer.isShowEdit,
  };
};

const mapDispatchToProps = {
    hideEditForm,
    editBookLibrary
 }; 

export default connect(mapStateToProps, mapDispatchToProps)(EditBookForm);
