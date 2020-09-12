import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

const Reply = (props) => {
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
                            <p>Agree - {props.replies.agree} | Disagree - {props.replies.disagree}</p>
                        </div>
                        <ButtonGroup aria-label="Basic example">
                            <Button variant="secondary">Agree</Button>
                            <Button variant="secondary">Disagree</Button>
                        </ButtonGroup>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Reply;