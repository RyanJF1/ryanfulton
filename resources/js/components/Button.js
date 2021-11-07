import React from 'react';
import ReactDOM from 'react-dom';

function Button(props) {
    return (

        <div className="container" >
            <div className="row justify-content-center" >
                <div className="col-md-8">

                <a href={props.link}><button type="button" class={props.class}>{props.text}</button></a>
                </div>
            </div>
        </div>

    );
}

export default Button;

if (document.getElementById('button')) {
    const component = document.getElementById('button');
    const props = Object.assign({}, component.dataset);
    ReactDOM.render(<Button {...props} />, component);
}
