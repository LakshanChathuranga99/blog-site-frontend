import React, { useState } from 'react';
import { Button, Accordion, Card, Form, Col, Row } from 'react-bootstrap';

import './AddComment.css';

const AddComment = (props) => {

    const [state, setstate] = useState({
        commentType: "",
        comment: "",
        msg: ""
    });

    const handleCommentType = e => {
        setstate({
            ...state,
            commentType: e.target.value
        })
    }

    const handleComment = e => {
        setstate({
            ...state,
            comment: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (state.commentType === "") {
            setstate({
                ...state,
                msg: "You need to specify the Comment Type"
            });
        } else if (state.comment === "") {
            setstate({
                ...state,
                msg: "You need to add a Comment"
            });
        } else {
            setstate({
                commentType: "",
                comment: "",
                msg: ""
            });
            document.getElementById('btnToggle').click();
            console.log(state);
            console.log(props.postID);
            
        }

    }

    return (
        <Accordion defaultActiveKey="0">

            <Card>
                <Card.Header >
                    <Accordion.Toggle variant="link" eventKey="1" className="btnComment" id="btnToggle">
                        Add a Comment
                                </Accordion.Toggle>
                </Card.Header>

                <Accordion.Collapse eventKey="1">
                    <Card.Body>

                        <Form onSubmit={handleSubmit}>
                            <fieldset>
                                <Form.Group as={Row}>
                                    <Form.Label as="legend" column sm={2}>
                                        Select Your Comment type
                                            </Form.Label>
                                    <Col sm={10}>
                                        <Form.Check
                                            type="radio"
                                            label="Supportive"
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios1"
                                            value="Supportive"
                                            onChange={handleCommentType}
                                        />
                                        <Form.Check
                                            type="radio"
                                            label="Question-wise"
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios2"
                                            value="Question-wise"
                                            onChange={handleCommentType}
                                        />
                                        <Form.Check
                                            type="radio"
                                            label="I have a another opinion"
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios3"
                                            value="I have a another opinion"
                                            onChange={handleCommentType}
                                        />
                                    </Col>
                                </Form.Group>
                            </fieldset>

                            <Form.Group as={Row} controlId="formHorizontalEmail">
                                <Form.Label column sm={2}>
                                    Add Your Comment
                              </Form.Label>
                                <Col sm={10}>
                                    <Form.Control as="textarea" rows="3" value={state.comment} onChange={handleComment} />
                                </Col>
                            </Form.Group>


                            <Form.Group as={Row}>
                                <Col sm={{ span: 10, offset: 2 }}>
                                    {state.msg !== "" ? <div><span className="errorMSG">{state.msg}</span><hr /></div> : ""}
                                    <Button type="submit" variant="secondary">Post</Button>
                                </Col>
                            </Form.Group>
                        </Form>


                    </Card.Body>
                </Accordion.Collapse>
            </Card>

        </Accordion>
    );
}

export default AddComment;