import React from 'react';
import Header from './Header.js'
import About from './About.jsx'
import Upload from './Upload.jsx'
import Preview from './Preview.jsx'

import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'

export default class MainView extends React.Component {
  render() {
    const style = {
        "padding-top": "100"
    };
    return (
        <div style={style}>
        <Grid>
            <Row>
                <Col md={6} mdPush={6}><Preview /></Col>
                <Col md={6} mdPull={6}><Upload /></Col>
            </Row>
        </Grid>
        </div>
     );
  }
}

