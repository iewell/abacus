
import React from 'react';

import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Button from 'react-bootstrap/lib/Button';

export default class Upload extends React.Component {
    render() {
        var container_style = {
            "width": "450",
            "height": "450",
            "position": "relative"
        };
        var style = {
            "width": "50%",
            "height": "25%",
            "position": "absolute",
            "top": "45%",
            "left": "25%",
            "text-align": "center",
            "margin": "-40 0 0 -170"
        };

        return (
            <div className="container">
            <Jumbotron style={container_style}>
                <div style={style}>
                    <p>Your rendered document will appear here.</p>
                </div>
            </Jumbotron>
            </div>
        );
    }
}
