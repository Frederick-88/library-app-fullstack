import React, {useState} from 'react'
import {connect} from "react-redux"
import { Modal } from "react-bootstrap"

import { addData, HideAddLibrary } from "../../actionCreators/LibraryAction"

const AddDataLibrary = (props) => {


  return(
    <div>
      TES
    </div>

  )
}

const mapStateToProps = (state) => {
  return {
  showAddForm : state.isShowAdd
  }
}

const mapDispatchToProps = {
  addData, 
  HideAddLibrary,
}

export default connect(mapStateToProps,mapDispatchToProps)(AddDataLibrary)