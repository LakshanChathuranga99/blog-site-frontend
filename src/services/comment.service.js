import axios from 'axios';
import { Subject } from 'rxjs';
import posts from "../db";

const newComment = new Subject();
export const CommentService = {
    addComment: commentPackage => {
        newComment.next({ newComment: commentPackage.newComment })

        posts[commentPackage.postID].commentSection.push(commentPackage.newComment)
    },
    clearComment: () => newComment.next(),
    getComment: () => newComment.asObservable()
};