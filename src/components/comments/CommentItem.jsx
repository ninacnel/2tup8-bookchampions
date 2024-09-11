import { Card } from "react-bootstrap";
import PropTypes from "prop-types";
import './CommentItem.css';


const CommentItem = ({ author, content, date }) => {
    return (
        <Card>
            <Card.Body className="bg-body-tertiary">
                <Card.Title>{author}</Card.Title>
                <Card.Text>{content}</Card.Text>
                <Card.Footer>
                    <small className="text-muted">{date}</small>
                </Card.Footer>
            </Card.Body>
        </Card>
    )
};


CommentItem.propTypes = {
    author: PropTypes.string,
    content: PropTypes.string,
    date: PropTypes.string,
};


export default CommentItem;