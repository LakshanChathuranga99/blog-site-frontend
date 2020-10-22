import React, { useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

import TimeStamp from '../../services/timestamp';
import { UserReactionService } from '../../services/userReaction.service';
import userDB from "../../userDB";

const Reply = (props) => {

    const [state, setstate] = useState({
        replyAgreeReactions: props.replies.agree,
        replyDisAgreeReactions: props.replies.disagree,
        replyAgreeReacted: userDB.replyReactions.agreeReaction.some(reaction => reaction.postID ===props.postID-1 && reaction.commentID ===props.commentID- 1 && reaction.replyID === props.replies.id - 1),
        replyDisAgreeReacted: userDB.replyReactions.disAgreeReaction.some(reaction => reaction.postID ===props.postID-1 && reaction.commentID ===props.commentID- 1 && reaction.replyID === props.replies.id - 1)
    });

    const replyReactionHandler = (reaction) => {
        switch (reaction) {
            case 'agree':
                if (!state.replyAgreeReacted) {
                    setstate({
                        ...state,
                        replyAgreeReactions: state.replyAgreeReactions + 1,
                        replyAgreeReacted : !state.replyAgreeReacted
                    });
                    UserReactionService.replyReacted('add','agree',props.postID-1,props.commentID- 1,props.replies.id - 1);
                } else {
                    setstate({
                        ...state,
                        replyAgreeReactions: state.replyAgreeReactions - 1,
                        replyAgreeReacted : !state.replyAgreeReacted
                    });
                    UserReactionService.replyReacted('remove','agree',props.postID-1,props.commentID- 1,props.replies.id - 1);
                }
                break;
            case 'disAgree':
                if (!state.replyDisAgreeReacted) {
                    setstate({
                        ...state,
                        replyDisAgreeReactions: state.replyDisAgreeReactions + 1,
                        replyDisAgreeReacted : !state.replyDisAgreeReacted
                    });
                    UserReactionService.replyReacted('add','disAgree',props.postID-1,props.commentID- 1,props.replies.id - 1);
                } else {
                    setstate({
                        ...state,
                        replyDisAgreeReactions: state.replyDisAgreeReactions - 1,
                        replyDisAgreeReacted : !state.replyDisAgreeReacted
                    });
                    UserReactionService.replyReacted('remove','disAgree',props.postID-1,props.commentID- 1,props.replies.id - 1);
                }
                break;
            default: break;
        }
    }


    const timestamp = TimeStamp();
    var timestampStr = timestamp.getTimeStamp(props.replies.dateTime);

    return (
        <div className="replyWrapper" key={props.replies.reply}>
            <div className="replyLayer">
                <div className="reply">
                    {props.replies.reply}
                </div>

                <hr />
                <div>
                    <div className="btnGrp">
                        <div className="postReactionCount">
                            <p><span className="dateTime">{timestampStr} | </span>Agree - {state.replyAgreeReactions} | Disagree - {state.replyDisAgreeReactions}</p>
                        </div>
                        <ButtonGroup aria-label="Basic example">
                            <Button variant={state.replyAgreeReacted? "dark" : "secondary"} onClick={() => replyReactionHandler('agree')}>Agree</Button>
                            <Button variant={state.replyDisAgreeReacted? "dark" : "secondary"} onClick={() => replyReactionHandler('disAgree')}>Disagree</Button>
                        </ButtonGroup>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Reply;