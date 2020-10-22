import { Subject } from 'rxjs';
import posts from "../db";

const newReply = new Subject();
export const ReplyService = {
    addReply: replyPackage => {
        newReply.next({ newReply: replyPackage.newReply })

        posts[replyPackage.postID-1].commentSection[replyPackage.commentID-1].replies.push(replyPackage.newReply);
    },
    clearReply: () => newReply.next(),
    getReply: () => newReply.asObservable()
};