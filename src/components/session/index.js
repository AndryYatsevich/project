import React from 'react';
import {connect} from 'react-redux';
import {getPollsItem, getSessionItem} from './selectors';
import {loadSessionItem, loadPollsItem} from './action';
import {PanelGroup, Panel} from 'react-bootstrap';

class Session extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            activeKey: '1'
        };
    }

    componentDidMount() {
        this.props.loadSessionItem();
    }

    handleSelect = (activeKey) => {
        this.setState({activeKey});
        if(activeKey){
            this.props.loadPollsItem(activeKey);

        }

    };

    renderSession = (array) => (array && array.map((el) => (
            <Panel eventKey={el.id}>
                <Panel.Heading>
                    <Panel.Title toggle>{el.title}</Panel.Title>
                </Panel.Heading>
                {this.renderPolls(this.props.pollsItem)}
            </Panel>
        ))
    );

    renderPolls = (array) => (array && array.map((el) => (
        <Panel.Body collapsible>{el.title}
        </Panel.Body>
    )));

    render() {

        return (
            <div>
                <PanelGroup
                    accordion
                    id="accordion-controlled-example"
                    activeKey={this.state.activeKey}
                    onSelect={this.handleSelect}
                >
                    {this.renderSession(this.props.sessionItem)}


                </PanelGroup>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    sessionItem: getSessionItem(state),
    pollsItem: getPollsItem(state)
});

export default connect(mapStateToProps, {loadSessionItem, loadPollsItem})(Session);
