import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

import { CommentService } from '../../services/comment.service';
import { UserReactionService } from '../../services/userReaction.service';

import posts from "../../db";
import userDB from "../../userDB";
import './Post.css';
import Comment from '../comment/Comment';
import AddComment from '../addComment/AddComment';

const PostField = (props) => {


    const [state, setstate] = useState({
        post: posts[props.match.params.id - 1],
        comments: posts[props.match.params.id - 1].commentSection,
        postGoodReactions: posts[props.match.params.id - 1].good,
        postExcelentReactions: posts[props.match.params.id - 1].excelent,
        postGoodReacted: userDB.postReactions.goodReaction.includes(props.match.params.id - 1),
        postExcelentReacted: userDB.postReactions.excelentReaction.includes(props.match.params.id - 1)
    });

    useEffect(() => {

        CommentService.getComment().subscribe(comment => {
            //console.log(comment.newComment)
            let newCommentArray = [...state.comments]
            newCommentArray.push(comment.newComment)

            setstate({
                ...state,
                comments: newCommentArray
            })
        })
    });

    const postReactionHandler = (reaction) => {
        switch (reaction) {
            case 'good':
                if (!state.postGoodReacted) {
                    setstate({
                        ...state,
                        postGoodReactions: state.postGoodReactions + 1,
                        postGoodReacted : !state.postGoodReacted
                    });
                    UserReactionService.postReacted('add','good',props.match.params.id - 1);
                } else {
                    setstate({
                        ...state,
                        postGoodReactions: (state.postGoodReactions >0)? state.postGoodReactions - 1 : state.postGoodReactions,
                        postGoodReacted : !state.postGoodReacted
                    });
                    UserReactionService.postReacted('remove','good',props.match.params.id - 1);
                }
                break;
            case 'excelent':
                if (!state.postExcelentReacted) {
                    setstate({
                        ...state,
                        postExcelentReactions: state.postExcelentReactions + 1,
                        postExcelentReacted : !state.postExcelentReacted
                    });
                    UserReactionService.postReacted('add','excelent',props.match.params.id - 1);
                } else {
                    setstate({
                        ...state,
                        postExcelentReactions: (state.postExcelentReactions >0)? state.postExcelentReactions - 1 : state.postExcelentReactions,
                        postExcelentReacted : !state.postExcelentReacted
                    });
                    UserReactionService.postReacted('remove','excelent',props.match.params.id - 1);
                }
                break;
            default: break;
        }
    }


    let id = props.match.params.id;

    return (
        <React.Fragment>
            <div className="ContainerPost">
                <h2>{state.post.heading}</h2><hr /><br />
                <p>{state.post.content}</p>
                <hr />

                <div className="btnGrp">
                    <div className="postReactionCount">
                        <p>Excelent Reactions - {state.postExcelentReactions} | Good Reactions - {state.postGoodReactions}</p>
                    </div>
                    <ButtonGroup aria-label="Basic example">
                        <Button variant={state.postExcelentReacted? "dark" : "secondary"} onClick={() => postReactionHandler('excelent')}>Excelent</Button>
                        <Button variant={state.postGoodReacted? "dark" : "secondary"} onClick={() => postReactionHandler('good')}>Good</Button>
                    </ButtonGroup>
                </div>
            </div>

            <div className="ContainerComment">

                <AddComment postID={id - 1} />
                <br />

                <label><b>Comments</b></label>
                <hr />

                {
                    (state.comments) ? (
                        state.comments.map((comment) => {
                            return <Comment comments={comment} key={comment.id} postID={id} commentID={comment.id} />
                        })
                    ) : "No Comments yet"

                }

            </div>
        </React.Fragment>

    );

}

export default PostField;