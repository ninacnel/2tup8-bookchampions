import { useRef, useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { comments } from "../../data/data";
import CommentItem from "./CommentItem";
import { useNavigate } from "react-router-dom";
import Greeting from "./Greeting";

const Comments = () => {
    const [allComments, setAllComments] = useState(comments);
    const [highlightComment, setHighlightComment] = useState(false);
    const [newComment, setNewComment] = useState("");
    const [name, setName] = useState("");

    const commentRef = useRef(null);
    const topRef = useRef(null);

    const navigate = useNavigate();

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
        if (newComment.trim() === "") return;
        if (name.trim() === "") return;

        let comment = {
            id: allComments.length + 1,
            author: name,
            content: newComment,
            date: new Date().toISOString(),
        };

        setAllComments([comment, ...allComments]);
        setNewComment("");
        setName("");
    };

    const backToHomeHandler = () =>{
        navigate("/");
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
            <Button
                style={{backgroundColor: "pink"}}
                variant="outline-info"
                className="mb-4"
                onClick={backToHomeHandler}
            >
                HOME
            </Button>
            <Row className="mb-4">
                <h6>Agregar comentario</h6>
                <Form.Control
                    type="text"
                    placeholder="Write a comment"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                />
                <h6>Tu nombre:</h6>
                <Form.Control
                    type="text"
                    placeholder="Write your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <Greeting name={name}/>
            </Row>
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
