import React, { useEffect, useState } from 'react';
import {
    Container,
} from "react-bootstrap";
import { Link } from 'react-router-dom';

import posts from "../../db";
import "./PostList.css"
import PostService from '../../services/post.service';

const PostList = () => {
    
    //------------- UnComment this sectio to get from db.js--------------
        const [state,setState] = useState(posts);
    //------------------------------------------------------------------

    //----- Comment This section if you want to disable the server DB ---------
        // const [state,setState] = useState();

        // const [status,setStatus] = useState(false);

        // const postService = PostService()

        // useEffect(() => {
        //     postService.getAllPosts();
        //     postService
        //         .gettingPosts
        //         .subscribe(posts => {
        //                 console.log(posts);
        //                 if(!status){
        //                     setState(posts);
        //                     setStatus(true);
        //                 } 
        //             });
        // });

    //---------------------------------------------------------------------------

    let renderingPostList;
    if (state) {
        renderingPostList = state.map((post) => {
            return (
                <div className="Container" key={post.id}>
                    <h2>{post.heading}</h2><hr /><br />
                    <Link to={`/${post.id}`} className="button">View More</Link>
                </div>
            );
        });
    }

    return (
        <Container>
            {renderingPostList}
        </Container>
    );
}

export default PostList;