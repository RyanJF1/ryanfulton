import React, { Component } from 'react'
import ReactDOM from 'react-dom';

export default function TextBox(props) {
    return (
        <div className="row justify-content-center">
        <div className="col-md-8">
            <div className="card">
                <div className="card-header">Welcome!</div>

                <div className="card-body">

                    It's a work in progress, but there is much more to come!
                </div>

                <div className="card-body">
                    In the meantime, check out my projects on <a href="https://github.com/RyanJF1">GitHub</a> or see what I'm up to on <a href="https://linkedin.com/in/ryan-fulton">LinkedIn</a>.
                </div>
            </div>
        </div>
    </div>
    )
}

if (document.getElementById('text-box')) {
    ReactDOM.render(<TextBox />, document.getElementById('text-box'));
}

