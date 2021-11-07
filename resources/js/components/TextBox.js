import React from 'react';
import ReactDOM from 'react-dom';

function TextBox(props) {
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

export default TextBox;

if (document.getElementById('textbox')) {
    const component = document.getElementById('textbox');
    const props = Object.assign({}, component.dataset);
    ReactDOM.render(<TextBox {...props} />, component);
}
