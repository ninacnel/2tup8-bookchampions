import PropTypes from "prop-types";
import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const BookItem = ({ id, summary, titleProp, author, pageCount, rating, imageUrl }) => {
  const [title, setTitle] = useState(titleProp);

  const navigate = useNavigate();

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
};

export default BookItem;