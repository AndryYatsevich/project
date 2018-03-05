import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid'
import './App.css';
import 'react-bootstrap/dist/css/bootstrap.css';
import Session from './components/session';



class App extends Component {
    render() {
        return (
            <Grid fluid className={'header-container'}>
                <div className={'header'}>
                    <Grid >
                        <Row>
                            <Col xs={12}>
                                <div className={'header-content'}>
                                    <div className={'header-item'}>DemoVoter</div>
                                    <div className={'header-item'}>Выход</div>
                                </div>
                            </Col>
                        </Row>

                    </Grid>
                </div>
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <div><Session/></div>
                        </Col>
                    </Row>
                </Grid>
            </Grid>

        );
    }
}

export default App;
