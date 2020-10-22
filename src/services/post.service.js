import axios from 'axios';
import { BehaviorSubject } from 'rxjs';

import posts from "../db";

const gettingPosts = new BehaviorSubject([]);

export const PostService = {

    getAllPosts : () => {
        axios.get('http://localhost:3000/api/posts')
            .then(response => {
                //console.log(response.data);
                gettingPosts.next(response.data.data)
                posts.push(response.data.data);
            })
            .catch(err => console.log(err));

    },

    addPost :(post) => {
        //console.log(post);
        axios.post('http://localhost:3000/api/posts', post)
            .then(response => {
                console.log(response.data);
                gettingPosts.next(response.data)
                //posts.push(response.data.data);
            })
            .catch(err => console.log(err));

    },

}

