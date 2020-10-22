import reactions from '../userDB';
import posts from "../db";

export const UserReactionService = {

    postReacted: (action, reaction, postID) => {
        switch (reaction) {
            case 'good':
                switch (action) {
                    case 'remove':  
                        const index = reactions.postReactions.goodReaction.indexOf(postID);
                        reactions.postReactions.goodReaction.splice(index, 1);

                        if (posts[postID].good > 0)
                        posts[postID].good = posts[postID].good - 1;
                        break;
                    case 'add':
                        reactions.postReactions.goodReaction.push(postID);

                        posts[postID].good = posts[postID].good + 1;
                        break;
                    default:
                };
                break;
            case 'excelent':
                switch (action) {
                    case 'remove':  
                        const index = reactions.postReactions.excelentReaction.indexOf(postID);
                        reactions.postReactions.excelentReaction.splice(index, 1);

                        if (posts[postID].excelent > 0)
                            posts[postID].excelent = posts[postID].excelent - 1;
                        break;
                    case 'add':
                        reactions.postReactions.excelentReaction.push(postID);

                        posts[postID].excelent = posts[postID].excelent + 1;
                        break;
                    default:
                };
                break;   
            default:
        }
    },

    commentReacted: (action, reaction, postID, CommentID) => {
        //console.log(CommentID)
        switch (reaction) {
            case 'agree':
                switch (action) {
                    case 'remove':  
                        const index = reactions.commentReactions.agreeReaction.indexOf({
                            postID : postID,
                            commentID : CommentID
                        });
                        reactions.commentReactions.agreeReaction.splice(index, 1);

                        if (posts[postID].commentSection[CommentID].agree > 0)
                        posts[postID].commentSection[CommentID].agree = posts[postID].commentSection[CommentID].agree - 1;
                        
                        break;
                    case 'add':
                        reactions.commentReactions.agreeReaction.push({
                            postID : postID,
                            commentID : CommentID
                        });

                        posts[postID].commentSection[CommentID].agree = posts[postID].commentSection[CommentID].agree + 1;
                        break;
                    default:
                };
                break;
            case 'disAgree':
                switch (action) {
                    case 'remove':  
                        const index = reactions.commentReactions.disAgreeReaction.indexOf({
                            postID : postID,
                            commentID : CommentID
                        });
                        reactions.commentReactions.agreeReaction.splice(index, 1);

                        if (posts[postID].commentSection[CommentID].disagree > 0)
                        posts[postID].commentSection[CommentID].disagree = posts[postID].commentSection[CommentID].disagree - 1;
                        break;
                    case 'add':
                        reactions.commentReactions.disAgreeReaction.push({
                            postID : postID,
                            commentID : CommentID
                        });

                        posts[postID].commentSection[CommentID].disagree = posts[postID].commentSection[CommentID].disagree + 1;
                        break;
                    default:
                };
                break; 
            default:
        }
    },

    replyReacted: (action, reaction, postID, CommentID, replyID) => {

        switch (reaction) {
            case 'agree':
                switch (action) {
                    case 'remove':  
                        const index = reactions.replyReactions.agreeReaction.indexOf({
                            postID : postID,
                            commentID : CommentID,
                            replyID: replyID
                        });
                        reactions.replyReactions.agreeReaction.splice(index, 1);

                        if (posts[postID].commentSection[CommentID].replies[replyID].agree > 0)
                        posts[postID].commentSection[CommentID].replies[replyID].agree = posts[postID].commentSection[CommentID].replies[replyID].agree- 1;
                        
                        break;
                    case 'add':
                        reactions.replyReactions.agreeReaction.push({
                            postID : postID,
                            commentID : CommentID,
                            replyID: replyID
                        });

                        posts[postID].commentSection[CommentID].replies[replyID].agree = posts[postID].commentSection[CommentID].replies[replyID].agree + 1;
                        break;
                    default:
                };
                break;
            case 'disAgree':
                switch (action) {
                    case 'remove':  
                        const index = reactions.replyReactions.disAgreeReaction.indexOf({
                            postID : postID,
                            commentID : CommentID,
                            replyID: replyID
                        });
                        reactions.replyReactions.agreeReaction.splice(index, 1);

                        if (posts[postID].commentSection[CommentID].replies[replyID].disagree > 0)
                        posts[postID].commentSection[CommentID].replies[replyID].disagree = posts[postID].commentSection[CommentID].replies[replyID].disagree - 1;
                        break;
                    case 'add':
                        reactions.replyReactions.disAgreeReaction.push({
                            postID : postID,
                            commentID : CommentID,
                            replyID: replyID
                        });

                        posts[postID].commentSection[CommentID].replies[replyID].disagree = posts[postID].commentSection[CommentID].replies[replyID].disagree + 1;
                        break;
                    default:
                };
                break; 
            default:
        }
    },

};