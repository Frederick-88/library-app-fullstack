import React from "react";
import { Modal, Button } from "react-bootstrap";

// SUPAYA PENGGUNAAN MAPSTATE DAN DISPATCH BISA BERJALAN
import { connect } from "react-redux";

// IMPORT INI ADALAH UNTUK PENGGUNAAN DISPATCH TO PROPS
import { hideDeleteForm, DeleteBookLibrary } from "../../actionCreators/LibraryAction";

const DeleteBookForm = (props) => {
 
    // const [data, setData] = useState({
    //     bookTitle: "",
    //     imageBook:"",
    //     years:"",
    //     bookNumber:"",
    //     status: false,
    //   })
    //   console.log(data);
  
  // PROPS INI BERASAL DARI ACTION CREATORS DAN DARI SNA KITA NGAMBIL "SEMBUNYIKANTAMBAH".
  // LIHATLAH IsShowAdd PADA REDUCERS.
  const hideFormDelete = () => {
    props.hideDeleteForm();
  };

  // const submitFormDelete = () => {
  //   console.log(data);
  //   props.editBookLibrary(data)
  // }

  return (
    // MENGIKUTI ALUR DARI BOOTSTRAP.
    <Modal show={props.show} onHide={ hideFormDelete }>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure want to delete this Book?</Modal.Title>
        </Modal.Header>

        <Modal.Footer>
          <Button variant="secondary" onClick={hideFormDelete}>
            Close
          </Button>
          <Button variant="primary" onClick={hideFormDelete}>
            DELETE
          </Button>
        </Modal.Footer>
      </Modal>
  );
  }
// MAP INI KITA AMBIL DARI REDUCERS PADA GURU, KARENA HANYA DI REDUCERS KITA LEBIH PAKAI STATE.
// DISINI KITA MEMBUAT YANG DIATAS PROPS.SHOW MENJADI MENGGUNAKAN IsShowAdd. SEHINGGA BISA MNCUL
// LALU NENGOK AJA FUNCTION HIDE, ITU LAH PENGGUNAAN YANG TERJADI. HIDE DAN MUNCULKAN
const mapStateToProps = (state) => {
  return {
    show: state.LibraryReducer.isShowDelete,
  };
};

const mapDispatchToProps = {
    hideDeleteForm,
    // DeleteBookLibrary
 }; 

export default connect(mapStateToProps, mapDispatchToProps)(DeleteBookForm);
