const express = require ('express')
const router = express.Router()
const libraryContainer = require("../containers/LibraryContainer")

router.post('/post', libraryContainer.createLibrary)
router.get('/get', libraryContainer.getLibraryData)
router.get('/get/:libraryId', libraryContainer.getLibraryDataById)
router.delete('/delete/:libraryId', libraryContainer.deleteById)
router.put('/edit/:libraryId', libraryContainer.editById)

module.exports = router