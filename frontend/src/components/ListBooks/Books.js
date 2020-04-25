import React, {useEffect} from 'react'
import { connect } from 'react-redux';

import {GetDataLibrary} from '../../actionCreators/LibraryAction'

const ListBooks = (props) => {

    // PERLU TANYA
    useEffect(()=>{
        props.GetDataLibrary()
    },[])

        return (
            <div>
                <div className="container">
                    <h1>FD-LIBRARY BOOKS LISTS</h1>
                    <div className="row">
                        {
                            props.data.map((item)=>{
                                
                                
                                return(
                                    <div className="col">{item.name}</div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        )
    }

    const mapStateToProps = (state) => {
        return{
            data: state.LibraryReducer.data
        }
    }

    const mapDispatchToProps = {GetDataLibrary}

    export default connect(mapStateToProps, mapDispatchToProps)(ListBooks)