const Library = require("../models/LibraryModel");

module.exports={
    createLibrary: (req,res,next) => {
        Library.create({
            imageBook : req.body.imageBook,
            bookTitle: req.body.bookTitle,
            years: req.body.years,
            bookNumber: req.body.bookNumber,
            status: req.body.status,
        })
        .then ((result)=>{
            res.json({ message:"Successfully Create Data.", data:result})
        })
    },

    getLibraryData: (req,res) => {
        console.log(req);
        Library.find({})
        .then ((result)=>{
            res.json({ 
                status:"This is the Data.", 
                data:result 
            })
        })
        .catch((error)=> res.json(error));
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
            imageBook : req.body.imageBook,
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