import { useState } from "react";
import Books from "../books/Books";
import NewBook from "../newBook/NewBook";
import { allBooks } from "../../data/data";

const Dashboard = () => {
    const [booksFiltered, setBooksFiltered] = useState(allBooks);
  
  
    const saveBookDataHandler = (enteredBookData) => {
      const bookData = {
        ...enteredBookData,
        id: Math.random(),
      };
  
  
      setBooksFiltered([bookData, ...booksFiltered]);
    };
  
  
    const searchHandler = (searchInput) => {
      if (searchInput === "") setBooksFiltered(allBooks);
  
  
      const searchInputUpperCase = searchInput.toUpperCase();
      const booksSearched = allBooks.filter((book) =>
        book.bookTitle.toUpperCase().includes(searchInputUpperCase)
      );
      setBooksFiltered(booksSearched);
    };
  
  
    return (
        <div className="d-flex flex-column align-items-center">
        <h2>Books Champion App</h2>
        <p>¡Quiero leer libros!</p>
        <NewBook onBookDataSaved={saveBookDataHandler} />
        <Books onSearch={searchHandler} books={booksFiltered} />
      </div>
    );
  };
  
  
  export default Dashboard;
  