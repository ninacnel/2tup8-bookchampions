import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ReserveButton from "../reserveButton/ReserveButton";
import { useCallback, useState } from "react";

const BookItem = ({ id, summary, titleProp, author, pageCount, rating, imageUrl, onDelete }) => {
  const [title, setTitle] = useState(titleProp);

  const navigate = useNavigate();

  const reserveHandler = useCallback(() => {
    alert(`Libro ${title} reservado!`);
  }, [title]);

  const clickHandle = () => {
    setTitle(title);
    navigate(`/book/${id}`, {
      state: {
       title,
       summary,
       author,
       pageCount,
       rating,
       imageUrl, 
      }
    });
  };

  return (
    <Card style={{ width: "22rem" }}>
      <Card.Img
        height={400}
        variant="top"
        src={imageUrl !== "" ? imageUrl : "https://bit.ly/47NylZk"}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle>{author}</Card.Subtitle>
        <div>{rating} estrellas</div>
        <p>{pageCount} páginas</p>
        <Button variant="primary" onClick={clickHandle}>
          Ver info
        </Button>
        <Button variant="danger" onClick={()=>onDelete(id)}>
          Eliminar
        </Button>
        <ReserveButton onClick={reserveHandler}/>
      </Card.Body>
    </Card>
  );
};

BookItem.propTypes = {
  titleProp: PropTypes.string,
  author: PropTypes.string,
  pageCount: PropTypes.number,
  rating: PropTypes.number,
  imageUrl: PropTypes.string,
  id: PropTypes.number,
  summary: PropTypes.string,
  onDelete: PropTypes.func,
};

export default BookItem;