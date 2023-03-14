const express = require('express');
const Joi = require('@hapi/joi');
const app = express();

app.use(express.json());



const Book = [
    {bookID:1 , bookname:'baghdad' , price:'2000 IQD'},
    {bookID:2 , bookname:'iraq'    , price:'10000 IQD'},
    {bookID:3 , bookname:'the mist', price:'7000 IQD'},
    {bookID:4 , bookname:'revl' , price:'1000 IQD'},
    {bookID:5 , bookname:'steven' , price:'56000 IQD'},
    {bookID:6 , bookname:'the earth' , price:'13000 IQD'},
    {bookID:7 , bookname:'thunder' , price:'20000 IQD'},
];

//get_allbooks
app.get('/books/allbooks' , (req , res) => {
    res.send(Book);
})

//get_book_by_ID
app.get('/books/:id' , (req , res) => {
    const book_id = Book.find(element => element.bookID == req.params.id);
    if(!book_id){
        return res.send(`this id ${req.params.id} is out of range`);

    }else{
        res.send(book_id);
    }
});



//get_book_by_name
app.get('/books_name/:name' , (req , res) => {
    const book_name = Book.find(element => element.bookname == req.params.name);
    if(!book_name){
        return res.send(`this name ${req.params.name} is out of range`);

    }else{
        res.send(book_name);
    }
});


//add_book
app.post('/add/book/' , (req , res) => {

    const { error } = book_validation(req.body);
    if(error){
        return res.send(error.details[0].message);
    }


            const book = {

            id : req.body.id,
            bookname : req.body.bookname,
            price : req.body.price
            
            }
    
        Book.push(book);
        res.send(book);
    
    
});



function book_validation(book){

        const schema = {

        id : Joi.number().integer().required(),
        bookname : Joi.string().required(),
        price : Joi.required()

        };

        return Joi.validate(book , schema);
}




//update_book

app.put('/update/book/:id' , (req , res) => {
    const book_to_update = Book.find(element => element.bookID == req.params.id);
    if (!book_to_update){
        return res.send("there is no book with this id");
    }

    const { error } = book_update_validation(req.body);
    if (error){
        return res.send(error.details[0].message);
    }

    

    book_to_update.bookname = req.body.bookname;
    book_to_update.price = req.body.price;
    res.send(book_to_update);

});



function book_update_validation(book){

    const schema = {
        bookname : Joi.required(),
        price : Joi.required()
    };

    return Joi.validate(book , schema);
    
}


//delete_book
app.delete('/book/delete/:id' , (req , res) => {
    const find_book_to_delete = Book.find(element => element.bookID == req.params.id);
    if(!find_book_to_delete){
        return res.send("there is no book with this id to delete");
    }
    
        const book_to_delete = Book.indexOf(find_book_to_delete);
        Book.splice(book_to_delete , 1);
        res.send(find_book_to_delete);
    
})


const port = process.env.port || 2000;
app.listen(port , () => {
    console.log(`Book_expree runing on port ${port}`);
});