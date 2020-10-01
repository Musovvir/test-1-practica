import React from 'react';

function Broadcast(props) {
    return (
        <div className="broadcast">
            <div>
                {props.broadcast.title}
            </div>
            <div>
                {props.broadcast.introtext}
            </div>
        </div>
    );
}

export default Broadcast;
