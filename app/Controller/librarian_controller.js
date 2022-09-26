const librarian = require('../model/librarian_model');         //Created a variable book and connected it with Schema
const http_formatter = require('../Util/http_formatter');           //Imported HTTP_FORMATTER

//Creating librarian
const createLibrarian = async (request, response) => {
    try {
        const user_Lib = await librarian.create(request.body);
        return response.status(200).json(http_formatter(user, "User Created Successfully"))
    } catch (error) {
        console.log(error)
        return response.status(400).json(http_formatter(error, "Something Went Wrong", false))
    }
};

//Getting Librarian
const get = async (request, response) => {
    try {
        const { pageNo, perPage } = request.query;
        const user = await librarian.find({});
        return response.status(200).json(http_formatter(user, "User Fetched Successfully"))
    } catch (error) {
        console.log(error)
        return response.status(400).json(http_formatter(error, "Something Went Wrong", false))
    }
};


module.exports = {
    createBook,
    getBook
};