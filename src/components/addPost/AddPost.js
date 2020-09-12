import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

import './AddPost.css';
import PostService from '../../services/post.service';

const AddPost = () => {

    const [state, setstate] = useState({
        heading: "",
        type: "",
        content: "",
        msg: ""
    });
    const postService = PostService();

    const handleHeading = (event) => {
        setstate({
            ...state,
            heading: event.target.value
        });
    }

    const handleCommentType = (event) => {
        setstate({
            ...state,
            type: event.target.value
        });
    }

    const handleContent = (event) => {
        setstate({
            ...state,
            content: event.target.value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (state.heading === "") {
            setstate({
                ...state,
                msg: "You need to specify the Post Heading"
            });
        } else if (state.type === "") {
            setstate({
                ...state,
                msg: "You need to specify post Type"
            });
        } else if (state.content === "") {
            setstate({
                ...state,
                msg: "You need to add the content"
            });
        } else {
            console.log(`Post Heading - ${state.heading} \nPost Type - ${state.type} \nPost Content - ${state.content} `);

            //----- unComment this section update data in the db--------------
                postService.addPost({heading: state.heading, content: state.content});
            //----------------------------------------------------

            setstate({
                heading: "",
                type: "",
                content: "",
                msg: ""
            });
        }
        
    }

    return (
        <Form className="ContainerAddPost" onSubmit={handleSubmit}>
            <h2>Add a Post</h2><hr />
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Post Heading</Form.Label>
                <Form.Control type="text" onChange={handleHeading} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Category</Form.Label>
                <Form.Control as="select" onChange={handleCommentType}>
                    <option value="">--Choose A Category--</option>
                    <option value="Health">Health</option>
                    <option value="Technology">Technology</option>
                    <option value="Education">Education</option>
                    <option value="Environment">Environment</option>
                    <option value="Travelling">Travelling</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Post Content</Form.Label>
                <Form.Control as="textarea" rows="3" onChange={handleContent} />
            </Form.Group>
            {state.msg !== "" ? <div><span className="errorMSG">{state.msg}</span><hr /></div> : ""}
            <Button
                type="submit"
                variant="secondary">Submit</Button>
        </Form>
    );
}

export default AddPost;
