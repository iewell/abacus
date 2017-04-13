// Component to upload a document

import React from 'react';

import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Button from 'react-bootstrap/lib/Button';

export default class Upload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {imageFile: ''};

        this.handleFile = this.handleFile.bind(this);
        this.uploadClicked = this.uploadClicked.bind(this);
    }

    handleFile(event) {
        var file = event.target.files[0];
        var imageType = /^image\//;
        if (!imageType.test(file.type)) {
            return;
        }
        this.setState({imageFile: file});
    }

    uploadClicked(event) {
        var fileElem = document.getElementById("docFile");
        if (fileElem) {
            fileElem.click();
        }
    }

    render() {
        var container_style = {
            "width": "450",
            "height": "450",
            "position": "relative",
            "marginLeft": "0",
            "marginRight": "0",
            "marginTop": "0"
        };

        var convert_container_style = {
            "width": "450",
            "height": "200",
            "position": "relative",
            "marginLeft": "0",
            "marginRight": "0",
            "marginTop": "0",
            "textAlign": "center"
        };

        var button_container = {
            "width": "50%",
            "height": "100%",
            "position": "absolute",
            "left": "25%",
        };

        var style = {
            "width": "40%",
            "height": "25%",
            "position": "absolute",
            "top": "40%",
            "left": "30%",
            "text-align": "center",
            "margin": "-40 0 0 -170"
        };
        var upload_style = {
            "display": "none"
        }
        var image_style = {
            "maxWidth": "100%",
            "maxHeight": "100%"
        }

        if (this.state.imageFile != '') {
            var reader = new FileReader();
            reader.onload = (function() { return function(e) { document.getElementById("thumbnail").src = e.target.result; }; })();
            reader.readAsDataURL(this.state.imageFile);
            return (
                <div className="container">
                <Jumbotron style={container_style}>
                <div style={image_style}>
                    <img src="" id="thumbnail" style={image_style}/>
                </div>
                </Jumbotron>
                <div style={convert_container_style}>
                    <h4>Select the document sections to be converted.</h4>
                    <div style={button_container}>
                    <Button bsStyle="primary" bsSize="large" block>Convert</Button>
                    </div>
                </div>
                </div>
            );
        }
        return (
            <div className="container">
            <Jumbotron style={container_style}>
                <div style={style}>
                    <Button bsStyle="primary" bsSize="large" block onClick={this.uploadClicked}>Upload</Button>
                    <p>Or drag and drop your file here</p>
                    <input type="file" id="docFile" accept="image/*" style={upload_style} onChange={this.handleFile} />
                </div>
            </Jumbotron>
            </div>
        );
    }
}
