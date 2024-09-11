import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { comments } from "../../data/data";
import CommentItem from "./CommentItem";

const Comments = () => {
    const [allComments, setAllComments] = useState(comments);

    const addCommentHandler = () => {
        let newComment = {
            id: allComments.length + 1,
            author: "LucasRodriguez",
            content: "Nostrud exercitation ullamco",
            date: "07/05/24:18:18:18",
        };
        setAllComments([newComment, ...allComments]);
    };

    return (
        <Container>
            <h2>Comment Section</h2>
            <Button
                variant="outline-info"
                className="mb-4"
            >
                Go to last comment
            </Button>
            <Button
                variant="outline-dark"
                className="mb-4"
                onClick={addCommentHandler}
            >
                Add new comment
            </Button>
            <Row>
                {allComments.map((c) => (
                    <Col
                        key={c.id}
                        sm={12}
                        lg={12}
                        className="mb-4"
                    >
                        <CommentItem
                            author={c.author}
                            content={c.content}
                            date={c.date}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};


export default Comments;
