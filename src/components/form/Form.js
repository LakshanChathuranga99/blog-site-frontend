import React from 'react';
import { Route } from 'react-router-dom';

import PostList from '../post-list/PostList';
import PostField from '../post/Post';
import AddPost from '../addPost/AddPost';
import './Form.css';

const FormContainer = () => {
    return (
        <div className="FormStyles">
                <Route path="/" exact component={PostList} />
                <Route path="/:id" exact component={PostField} />
                <Route path="/posts/addPost" exact component={AddPost} />

        </div>
    );
}

export default FormContainer;

