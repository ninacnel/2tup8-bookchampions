import { useEffect, useState } from "react";
import Books from "../books/Books";
import NewBook from "../newBook/NewBook";
import { Button } from "react-bootstrap";

const Dashboard = () => {
  const [booksFiltered, setBooksFiltered] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://localhost:7120/api/Book", {
      headers: {
        accept: "application/json",
        "Authorization": `Bearer ${localStorage.getItem("bookchampions-token")}`,
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
        "Content-type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("bookchampions-token")}`,
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
        const bookMapped = {
          bookTitle: bookData.title,
          bookAuthor: bookData.author,
          pageCount: bookData.pagesAmount,
          imageUrl: bookData.imageUrl,
          bookRating: bookData.rating,
        };
        const newBooksArray = [
          { ...bookMapped, bookRating: enteredBookData.bookRating },
          ...booksFiltered,
        ];
        setBooksFiltered(newBooksArray);
      });
  };

  const deleteBookHandle = (id) => {
    fetch(`https://localhost:7120/api/Book/${id}`, {
      method: "DELETE",
      headers: {
        accept: "application/json",
        "Authorization": `Bearer ${localStorage.getItem("bookchampions-token")}`,
      },
    }).then(() => {
      const updatedBooks = booksFiltered.filter((book) => book.id !== id);
      setBooksFiltered(updatedBooks);
    });
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <h2>Books Champion App</h2>
      <p>¡Quiero leer libros!</p>
      <h3>Count: {count}</h3>
      <Button onClick={() => setCount(count + 1)}>Rerender</Button>
      <NewBook onBookDataSaved={saveBookDataHandler} />
      <Books books={booksFiltered} onDelete={deleteBookHandle} />
    </div>
  );
};

export default Dashboard;
