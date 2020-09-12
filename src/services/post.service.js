import axios from 'axios';
import { BehaviorSubject } from 'rxjs';

const PostService = () => {
    const posts = [];
    const gettingPosts = new BehaviorSubject([]);

    const getAllPosts = () => {
        axios.get('http://localhost:3000/api/posts')
            .then(response => {
                //console.log(response.data);
                gettingPosts.next(response.data.data)
                posts.push(response.data.data);
            })
            .catch(err => console.log(err));
        
    }

    const addPost = (post) => {
        //console.log(post);
        axios.post('http://localhost:3000/api/posts',post)
            .then(response => {
                console.log(response.data);
                gettingPosts.next(response.data)
                //posts.push(response.data.data);
            })
            .catch(err => console.log(err));
        
    }

    return {
        posts,
        gettingPosts,
        getAllPosts,
        addPost
    }
}

export default PostService;
