import React from 'react';
import {connect} from 'react-redux';
import {getPollsItem, getSessionItem} from './selectors';
import {loadSessionItem, loadPollsItem} from './action';
import {PanelGroup, Panel, Button} from 'react-bootstrap';
import {Grid, Row, Col} from 'react-flexbox-grid';
import SessionInfo from '../sessionInfo';

class Session extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            activeKey: 0
        };
    }

    componentDidMount() {
        this.props.loadSessionItem();
    }

    handleSelect = (activeKey) => {
        this.setState({activeKey});
        if (activeKey) {
            this.props.loadPollsItem(activeKey);

        }

    };

    renderSession = (array) => (array && array.map((el) => (
            <Panel eventKey={el.id}>
                <Panel.Heading>
                    <Panel.Title toggle>{el.title}</Panel.Title>
                </Panel.Heading>
                {this.renderPolls(this.props.pollsItem)}
                <Panel.Body collapsible>
                    <Button bsStyle="success">Добавить выступление</Button>
                </Panel.Body>
            </Panel>
        ))
    );

    renderPolls = (array) => (array && array.map((el) => (
        <Panel.Body collapsible>{el.title}
        </Panel.Body>

    )));

    render() {
        let style = {
            marginBottom: '5px'
        }
        return (
            <Grid>
                <Row>
                    <Col xs={4}>
                        <Button bsStyle="success" style={style}>Добавить сессию</Button>
                        <PanelGroup
                            accordion
                            id="accordion-controlled-example"
                            activeKey={this.state.activeKey}
                            onSelect={this.handleSelect}
                        >

                            {this.renderSession(this.props.sessionItem)}


                        </PanelGroup>
                    </Col>
                    <Col xs={8}>
                        {(this.state.activeKey) ? <SessionInfo sessionInfo={this.props.pollsItem} /> : ''}
                        {console.log('this.props.pollsItem:', this.props.pollsItem)}
                    </Col>
                </Row>
            </Grid>
        );
    }
}

const mapStateToProps = (state) => ({
    sessionItem: getSessionItem(state),
    pollsItem: getPollsItem(state)
});

export default connect(mapStateToProps, {loadSessionItem, loadPollsItem})(Session);
