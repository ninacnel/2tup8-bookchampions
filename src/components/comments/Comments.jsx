import { useRef, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { comments } from "../../data/data";
import CommentItem from "./CommentItem";

const Comments = () => {
    const [allComments, setAllComments] = useState(comments);
    const [highlightComment, setHighlightComment] = useState(false);

    const commentRef = useRef(null);
    const topRef = useRef(null);

    const lastCommentHandler = () => {
        if(commentRef.current){
            commentRef.current.scrollIntoView();
        }
        setHighlightComment(true);
    };

    const backToTopHandler = () => {
        if(topRef.current){
            topRef.current.scrollIntoView();
        }
        setHighlightComment(false);
    };

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
            <h2 ref={topRef}>Comment Section</h2>
            <Button
                variant="outline-info"
                className="mb-4"
                onClick={lastCommentHandler}
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
                {allComments.map((c, index) => (
                    <Col
                        key={c.id}
                        sm={12}
                        lg={12}
                        className="mb-4"
                        ref={index === allComments.length - 1 ? commentRef : null}
                    >
                        <CommentItem
                            author={c.author}
                            content={c.content}
                            date={c.date}
                            lastComment={index === allComments.length - 1 && highlightComment}
                        />
                    </Col>
                ))}
            </Row>
            <Button
                variant="outline-info"
                className="mb-4"
                onClick={backToTopHandler}
            >
                Back to top
            </Button>
        </Container>
    );
};


export default Comments;
