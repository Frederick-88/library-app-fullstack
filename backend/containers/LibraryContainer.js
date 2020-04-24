const Library = require("../models/LibraryModel");

module.exports={
    createLibrary: (req,res,next) => {
        Library.create({
            bookTitle: req.body.bookTitle,
            years: req.body.years,
            bookNumber: req.body.bookNumber,
            status: req.body.status,
        })
        .then ((result)=>{
            res.json({ message:"Successfully Create Data.", data:result})
        })
    },

    getLibraryData: (req,res,next) => {
        Library.find({})
        .then ((result)=>{
            res.json({ message:"This is the Data.", data:result})
        })
        .catch((error)=> error )
    },

    getLibraryDataById: (req,res,next) => {
        Library.findById(req.params.libraryId)
        .then ((result)=>{
            res.json({ message:"This is the Data by Id.", data:result})
        })
        .catch((error)=> error )
    },

    deleteById: (req,res,next) => {
        Library.findByIdAndRemove(req.params.libraryId)
        .then ((result)=>{
            res.json({ message:"Successfully Deleted Data."})
        })
        .catch((error)=> error )
    },

    editById: (req,res,next) => {
        Library.findByIdAndUpdate(req.params.libraryId,{
            bookTitle: req.body.bookTitle,
            years: req.body.years,
            bookNumber: req.body.bookNumber,
            status: req.body.status,
        })
        .then ((result)=>{
            res.json({ message:"This is the Data by Id.", data:result})
        })
        .catch((error)=> error )
    },


}