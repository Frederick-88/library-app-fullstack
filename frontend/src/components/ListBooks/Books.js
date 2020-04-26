import React, {useEffect} from 'react'
import { connect } from 'react-redux';

import {GetDataLibrary} from '../../actionCreators/LibraryAction'

import BooksItem from './BooksItem'

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
                            props.data.map((item,index)=>{
                                return( 
                                    <BooksItem key={index} dataLibrary={item}></BooksItem>
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