import React, {useState} from "react";
import {Form, Button} from "react-bootstrap";
import './Sign.css'
import {Link} from "react-router-dom";

const SignIn = () => {
    const [state, setstate] = useState({
        email: "",
        password: "",
        remember: ""
    });

    const handleEmail = (event) => {
        setstate({
            ...state,
            email: event.target.value
        });
    }

    const handlePassword = (event) => {
        setstate({
            ...state,
            password: event.target.value
        });
    }

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;

        if (target.checked) {
            setstate({
                ...state,
                remember: value
            });
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (state.email === "") {
            setstate({
                ...state,
                msg: "You need to add the email"
            });
        } else if (state.password === "") {
            setstate({
                ...state,
                msg: "You need to add the password"
            });
        } else {
            console.log(`SignIn\nemail - ${state.email} \npassword - ${state.password} \nremember - ${state.remember}`);

            //----- unComment this section update data in the db--------------
            //   postService.addPost({heading: state.heading, content: state.content});
            //----------------------------------------------------

            setstate({
                email: "",
                password: "",
                remember: ""
            });
        }
    }

    return (
        <Form className="ContainerSign" onSubmit={handleSubmit}>
            <h3>Sign In</h3>
            <hr/>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" className="form-control" placeholder="Enter email" onChange={handleEmail}/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={handlePassword}/>
            </Form.Group>

            <Form.Group id="formGridCheckbox">
                <Form.Check type="checkbox" label="Remember me" onChange={handleInputChange}/>
            </Form.Group>

            <Button type="submit" className="btn btn-primary btn-block">Submit</Button>
            <p className="forgot-password text-right">
                Forgot <a href="#">password?</a>
                <Link as={Link} to="/profile/SignUp" className="links"> SignUp</Link>
            </p>
        </Form>
    );
}
export default SignIn;
