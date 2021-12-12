import React from 'react';
import ReactDOM from 'react-dom';

function Textbox(props) {
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

export default Textbox;

if (document.getElementById('textbox')) {
    ReactDOM.render(<Textbox title="About Me" body="Recent CIS graduate from Georgia State University seeking a Full Stack Web Developer position."/>, document.getElementById('textbox'));
}
