import axios from 'axios';
import { Subject } from 'rxjs';
import posts from "../db";

// const CommentService = () => {
//    // const comments = [];
//     const newComment = new Subject();

//     // const getAllPosts = () => {
//     //     axios.get('http://localhost:3000/api/posts')
//     //         .then(response => {
//     //             //console.log(response.data);
//     //             gettingPosts.next(response.data.data)
//     //             posts.push(response.data.data);
//     //         })
//     //         .catch(err => console.log(err));
        
//     // }

//     const addComment = (comment) => {
//         //console.log(post);
//         // axios.post('http://localhost:3000/api/posts',post)
//         //     .then(response => {
//         //         console.log(response.data);
//         //         //gettingPosts.next(response.data)
//         //         //posts.push(response.data.data);
//         //     })
//         //     .catch(err => console.log(err));
//         //console.log
//         newComment.next({ newComment : comment})
//     }

//     const getComment = () => newComment.asObservable()

//     return {
//         newComment,
//         addComment,
//         getComment
//     }
// }

// export default CommentService;
const newComment = new Subject();
export const CommentService = {
    addComment: commentPackage => {
        newComment.next({ newComment: commentPackage.newComment })

        posts[commentPackage.postID].commentSection.push(commentPackage.newComment)
    },
    clearComment: () => newComment.next(),
    getComment: () => newComment.asObservable()
};