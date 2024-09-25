import { useEffect, useState } from "react";
import Books from "../books/Books";
import NewBook from "../newBook/NewBook";
import { allBooks } from "../../data/data";
import { Button } from "react-bootstrap";

const Dashboard = () => {
    const [booksFiltered, setBooksFiltered] = useState([]);
    const [count, setCount]=useState(0);
  
    useEffect(() => {
      fetch("https://localhost:7120/api/Book", {
        headers: {
          accept: "application/json",
          "Authorization": `Bearer ${localStorage.getItem("bookchampions-token")}`
        },
      })
        .then((response) => response.json())
        .then((bookData) => {
          const booksMapped = bookData
            .map((book) => ({
              id: book.id,
              bookTitle: book.title,
              bookAuthor: book.author,
              pageCount: book.pagesAmount,
              imageUrl: book.imageUrl,
              summary: book.summary,
              bookRating: Array(book.rating).fill("*"),
            }))
            .sort((a, b) => b.id - a.id);
          setBooksFiltered(booksMapped);
        })
        .catch((error) => console.log(error));
    }, []);
  
  
    const saveBookDataHandler = (enteredBookData) => {
      const bookData = {
        title: enteredBookData.bookTitle,
        author: enteredBookData.bookAuthor,
        pagesAmount: enteredBookData.pageCount,
        imageUrl: enteredBookData.imageUrl,
        summary: "",
        rating: enteredBookData.bookRating.length,
      };
  
  
      fetch("https://localhost:7120/api/Book", {
        method: "POST",
        headers: {
          'Content-type': "application/json",
          "Authorization": `Bearer ${localStorage.getItem("bookchampions-token")}`
        },
        body: JSON.stringify(bookData),
      })
        .then((response) => {
          if (response.ok) return response.json();
          else {
            throw new Error("The response has some errors");
          }
        })
        .then(() => {
          const newBooksArray = [
            { ...bookData, bookRating: enteredBookData.bookRating },
            ...booksFiltered,
          ];
          setBooksFiltered(newBooksArray);
        });
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
        <h3>Count: {count}</h3>
        <Button onClick={()=>setCount(count+1)}>Rerender</Button>
        <NewBook onBookDataSaved={saveBookDataHandler} />
        <Books onSearch={searchHandler} books={booksFiltered} />
      </div>
    );
  };
  
  
  export default Dashboard;
  