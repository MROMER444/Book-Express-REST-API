Book Express Book Express is a simple Node.js and Express web application that allows you to view, add, update, and delete books. The application uses Joi for input validation.

Getting Started To get started with Book Express, follow these steps:

Clone the repository: git clone https://github.com/MROMER444/Book-Express-REST-API.git Install the dependencies: npm install Start the server: npm start The server should now be running on http://localhost:2000.

Usage View all books To view all the books, make a GET request to http://localhost:2000/books/allbooks.

View a book by ID To view a book by ID, make a GET request to http://localhost:2000/books/:id, replacing :id with the ID of the book you want to view.

View a book by name To view a book by name, make a GET request to http://localhost:2000/books_name/:name, replacing :name with the name of the book you want to view.

Add a book To add a book, make a POST request to http://localhost:2000/add/book/ with the book details in the request body.

Update a book To update a book, make a PUT request to http://localhost:2000/update/book/:id, replacing :id with the ID of the book you want to update, and including the updated book details in the request body.

Delete a book To delete a book, make a DELETE request to http://localhost:2000/book/delete/:id, replacing :id with the ID of the book you want to delete.
