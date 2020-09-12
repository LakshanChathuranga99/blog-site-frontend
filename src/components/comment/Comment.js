import React, { useState } from 'react';
import { Button, ButtonGroup, FormControl } from 'react-bootstrap';

import Reply from '../reply/Reply';

const Comment = (props) => {

    const [state,setstate] = useState("");
    
    const handleReply = (event)=> {
        setstate(event.target.value);
    }

    
    const addReply = (event)=> {
        event.preventDefault();
        console.log(`PostID - ${props.postID} CommentID- ${props.commentID} Comment- ${state}`);
    }

    return (
        <div className="commentWrapper" key={props.comments.comment}>
            <div className="commentLayer">
                <div>
                    <div className="comment">{props.comments.comment}</div>
                    <div className="commentType">{props.comments.type}</div>
                </div>
                <hr />
                <div className="btnGrp">
                    <div className="postReactionCount">
                        <p>Agree - {props.comments.agree} | Disagree - {props.comments.disagree}</p>
                    </div>
                    <ButtonGroup aria-label="Basic example">
                        <Button variant="secondary">Agree</Button>
                        <Button variant="secondary">Disagree</Button>
                    </ButtonGroup>
                </div>
            </div>

            <div>
                {
                    (props.comments.replies) ? (
                        props.comments.replies.map((reply) => {
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