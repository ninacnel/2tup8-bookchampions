import { useState } from "react";
import Books from "./components/books/Books";
import NewBook from "./components/newBook/NewBook";
import Login from "./components/form/Login";
import Comments from "./components/comments/Comments";

const BOOKS = [
  {
    id: 1,
    bookTitle: "100 años de soledad",
    bookAuthor: "Gabriel García Marquez",
    bookRating: Array(5).fill("*"),
    pageCount: 410,
    imageUrl:
      "https://images.cdn3.buscalibre.com/fit-in/360x360/61/8d/618d227e8967274cd9589a549adff52d.jpg",
  },
  {
    id: 2,
    bookTitle: "Asesinato en el Orient Express",
    bookAuthor: "Agatha Christie",
    bookRating: Array(4).fill("*"),
    pageCount: 256,
    imageUrl:
      "https://m.media-amazon.com/images/I/71RFyM95qwL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 3,
    bookTitle: "Las dos torres",
    bookAuthor: "J.R.R Tolkien",
    bookRating: Array(5).fill("*"),
    pageCount: 352,
    imageUrl:
      "https://m.media-amazon.com/images/I/A1y0jd28riL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 4,
    bookTitle: "50 sombras de Grey",
    bookAuthor: "E.L James",
    bookRating: Array(1).fill("*"),
    pageCount: 514,
    imageUrl:
      "https://prodimage.images-bn.com/pimages/9781728260839_p0_v2_s1200x630.jpg",
  },
];

function App() {
  const [books, setBooks] = useState(BOOKS);

  const saveBookDataHandler = (enteredBookData) => {
    const bookData = {
      ...enteredBookData,
      id: Math.random().toString(),
    };

    setBooks([bookData, ...books])
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <h2>Books Champion App</h2>
      <p>¡Quiero leer libros!</p>
      {/* <NewBook onBookDataSaved={saveBookDataHandler} />
      <Books books={books} /> */}
      {/* <Login/> */}
      <Comments/>
    </div>
  );
}

export default App;