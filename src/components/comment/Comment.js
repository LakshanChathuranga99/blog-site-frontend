import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, FormControl } from 'react-bootstrap';
import moment from 'moment';

import Reply from '../reply/Reply';
import TimeStamp from '../../services/timestamp';
import { ReplyService } from '../../services/reply.service';
import { UserReactionService } from '../../services/userReaction.service';
import userDB from "../../userDB";

const Comment = (props) => {

    const [state,setstate] = useState({
        replies : props.comments.replies,
        newReply :"",
        commentAgreeReactions: props.comments.agree,
        commentDisAgreeReactions: props.comments.disagree,
        commentAgreeReacted: userDB.commentReactions.agreeReaction.some(reaction => reaction.postID === props.postID-1 &&  reaction.commentID === props.comments.id-1 ),
        commentDisAgreeReacted: userDB.commentReactions.disAgreeReaction.some(reaction => reaction.postID === props.postID-1 &&  reaction.commentID === props.comments.id-1 )
    });

    const timestamp = TimeStamp();
    var timestampStr = timestamp.getTimeStamp(props.comments.dateTime);
    
    const handleReply = (event)=> {
        setstate({
            ...state,
            newReply : event.target.value
        });
    }

    const addReply = (event)=> {
        event.preventDefault();
        //console.log(`PostID - ${props.postID} CommentID- ${props.commentID} Comment- ${state}`);

        const now = moment(new Date()).format("DD/MM/YYYY HH:mm:ss");

        const newReply = {
            id: state.replies.length+1,
            reply: state.newReply,
            dateTime: now,
            agree: 0,
            disagree: 0,
        }

        let newReplyArray = [...state.replies];
        newReplyArray.push(newReply);

        setstate({
            ...state,
            replies : newReplyArray
        });

        const replyPackage = {
            postID : props.postID,
            commentID: props.commentID,
            newReply: newReply
        }

        ReplyService.addReply(replyPackage);
    }

    const commentReactionHandler = (reaction) => {
        switch (reaction) {
            case 'agree':
                if (!state.commentAgreeReacted) {
                    setstate({
                        ...state,
                        commentAgreeReactions: state.commentAgreeReactions + 1,
                        commentAgreeReacted : !state.commentAgreeReacted
                    });
                    UserReactionService.commentReacted('add','agree',props.postID-1,props.comments.id- 1);
                } else {
                    setstate({
                        ...state,
                        commentAgreeReactions: state.commentAgreeReactions - 1,
                        commentAgreeReacted : !state.commentAgreeReacted
                    });
                    UserReactionService.commentReacted('remove','agree',props.postID-1,props.comments.id- 1);
                }
                break;
            case 'disAgree':
                if (!state.commentDisAgreeReacted) {
                    setstate({
                        ...state,
                        commentDisAgreeReactions: state.commentDisAgreeReactions + 1,
                        commentDisAgreeReacted : !state.commentDisAgreeReacted
                    });
                    UserReactionService.commentReacted('add','disAgree',props.postID-1,props.comments.id- 1);
                } else {
                    setstate({
                        ...state,
                        commentDisAgreeReactions: state.commentDisAgreeReactions - 1,
                        commentDisAgreeReacted : !state.commentDisAgreeReacted
                    })
                    UserReactionService.commentReacted('remove','disAgree',props.postID-1,props.comments.id- 1);
                }
                break;
            default: break;
        }
    }

    // useEffect(() => {
    //   console.log(userDB.commentReactions.agreeReaction);
    //   console.log(userDB.commentReactions.agreeReaction.some(reaction => (reaction.postID === props.postID-1 &&  reaction.commentID === props.comments.id-1) ));
    // });

    return (
        <div className="commentWrapper" key={props.comments.comment}>
            <div className="commentLayer">
                <div>
                    <div className="comment">{props.comments.comment} </div>
                   
                    <div className="commentType">{props.comments.type}</div>
                </div>
                <hr />
                <div className="btnGrp">
                    <div className="postReactionCount">
                        <p> <span className="dateTime">{timestampStr} | </span>Agree - {state.commentAgreeReactions} | Disagree - {state.commentDisAgreeReactions}</p>
                    </div>
                    <ButtonGroup aria-label="Basic example">
                        <Button variant={state.commentAgreeReacted? "dark" : "secondary"} onClick={() => commentReactionHandler('agree')}>Agree</Button>
                        <Button variant={state.commentDisAgreeReacted? "dark" : "secondary"} onClick={() => commentReactionHandler('disAgree')}>Disagree</Button>
                    </ButtonGroup>
                </div>
            </div>

            <div>
                {
                    (state.replies) ? (
                        state.replies.map((reply) => {
                            return <Reply replies={reply} key={reply.id} postID={props.postID} commentID={props.comments.id} />

                        })) : "No Replies yet"

                }
                <div className="addingReply">
                    <form onSubmit={addReply}>
                        <label>Add a Reply :</label>
                        <FormControl style={{ marginBottom: '5px' }} onChange= {handleReply}/>
                        <Button type="submit" variant="secondary">Post</Button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Comment;