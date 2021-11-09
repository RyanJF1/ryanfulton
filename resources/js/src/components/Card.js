import React from 'react';
import ReactDOM from 'react-dom';

function Card(props) {
    return (
        <div className="container py-4">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">{props.title}</div>
                        <div className="card-body">{props.body}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
