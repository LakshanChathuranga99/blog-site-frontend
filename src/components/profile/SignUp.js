import React, {useState} from "react";
import {Form, Button} from 'react-bootstrap';
import './Sign.css'
import {Link} from "react-router-dom";
import Col from "react-bootstrap/Col";


const checkboxes = [
    {
        name: 'Health',
        isChecked: false,
        key: 'checkBox1',
        label: 'Check Box 1',
    },
    {
        name: 'Technology',
        isChecked: false,
        key: 'checkBox2',
        label: 'Check Box 2',
    },
    {
        name: 'Education',
        isChecked: false,
        key: 'checkBox3',
        label: 'Check Box 3',
    },
    {
        name: 'Environment',
        isChecked: false,
        key: 'checkBox4',
        label: 'Check Box 4',
    },
    {
        name: 'Travelling',
        isChecked: false,
        key: 'checkBox5',
        label: 'Check Box 5',
    }

];

const SignUp = () => {

    const [state, setstate] = useState({
        firstName: "",
        lastName: "",
        gender: "",
        email: "",
        password: "",
        categories: new Map()
    });

    const handleFName = (event) => {
        setstate({
            ...state,
            firstName: event.target.value
        });
    }

    const handleLName = (event) => {
        setstate({
            ...state,
            lastName: event.target.value
        });
    }

    const handleGender = (event) => {
        setstate({
            ...state,
            gender: event.target.value
        });
    }

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
        const item = event.target.name;
        const isChecked = event.target.checked;
        setstate(state => ({...state, categories: state.categories.set(item, isChecked)}));
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        if (state.firstName === "") {
            setstate({
                ...state,
                msg: "You need to specify your First Name"
            });
        } else if (state.lastName === "") {
            setstate({
                ...state,
                msg: "You need to specify your Last Name"
            });
        } else if (state.gender === "") {
            setstate({
                ...state,
                msg: "You need to specify gender"
            });
        } else if (state.email === "") {
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
            console.log(`SignUp\n firstname - ${state.firstName} 
            \nlastname - ${state.lastName} \ngender - ${state.gender}
            \nemail - ${state.email} \npassword - ${state.password} 
            \ncategories - ${state.categories.entries()}`);

            //----- unComment this section update data in the db--------------
            //   postService.addPost({heading: state.heading, content: state.content});
            //----------------------------------------------------

            setstate({
                firstName: "",
                lastName: "",
                gender: "",
                email: "",
                password: "",
                categories: new Map(),
                msg: ""
            });
        }

    }


    return (
        <Form className="ContainerSign" onSubmit={handleSubmit}>
            <h3>Sign Up</h3>
            <hr/>
            <Form.Group controlId="formBasicFName">
                <Form.Label>First name</Form.Label>
                <Form.Control type="text" className="form-control" placeholder="First name" onChange={handleFName}/>
            </Form.Group>

            <Form.Group controlId="formBasicLName">
                <Form.Label>Last name</Form.Label>
                <Form.Control type="text" className="form-control" placeholder="Last name" onChange={handleLName}/>
            </Form.Group>

            <Form.Group controlId="formBasicGender">
                <Form.Label>Gender</Form.Label>
                <Form.Control as="select" onChange={handleGender}>
                    <option value="">--Choose A Category--</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" className="form-control" placeholder="Enter email" onChange={handleEmail}/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={handlePassword}/>
            </Form.Group>

            <Form.Group controlId="formGridCheckbox">
                <Form.Label>Select Preferred Categories
                {
                    checkboxes.map(item => (
                            <Form.Check type="checkbox"
                                          key={item.key}
                                          label ={item.name}
                                          name={item.name}
                                          checked={state.categories[item.name]}
                                          onChange={handleInputChange}/>
                    ))
                }
                </Form.Label>
            </Form.Group>

            <Button type="submit" className="btn btn-primary btn-block">Submit</Button>
            <p className="forgot-password">
                Already registered?
                <Link as={Link} to="/profile/SignIn" className="links"> SignIn</Link>
            </p>
        </Form>
    );
}
export default SignUp;
