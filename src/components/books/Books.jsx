import PropTypes from "prop-types";
import BookItem from "../bookItem/BookItem";

const Books = ({ books }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "20px",
      }}
    >
      {books.map((book) => (
        <BookItem
          key={book.id}
          titleProp={book.bookTitle}
          author={book.author}
          rating={book.bookRating.length}
          pageCount={book.pageCount}
          imageUrl={book.imageUrl}
        />
      ))}
    </div>
  );
};

Books.propTypes = {
  books: PropTypes.array,
};

export default Books;