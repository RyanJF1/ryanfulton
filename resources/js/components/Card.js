import React from 'react';
import ReactDOM from 'react-dom';

function Card(props) {
    return (
        <div className="container">
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

if (document.getElementById('card')) {
    const component = document.getElementById('card');
    const props = Object.assign({}, component.dataset);
    ReactDOM.render(<Card {...props} />, component);
}
