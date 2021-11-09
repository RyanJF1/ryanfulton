import React from 'react';
import ReactDOM from 'react-dom';

function Textbox(props) {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">{props.body}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Textbox;
