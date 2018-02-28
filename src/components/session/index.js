import React from 'react';
import {connect} from 'react-redux';
import {getSessionItem} from './selectors';
import {loadSessionItem} from './action';
import {PanelGroup, Panel} from 'react-bootstrap';

class Session extends React.Component {
    constructor(context) {
        super(context);

        this.handleSelect = this.handleSelect.bind(this);

        this.state = {
            activeKey: '1'
        };
    }

    handleSelect(activeKey) {
        this.setState({ activeKey });
    }

    componentDidMount() {
        this.props.loadSessionItem();
    }


    /*    */

    render() {

        return (
                <PanelGroup
                    accordion
                    id="accordion-controlled-example"
                    activeKey={this.state.activeKey}
                    onSelect={this.handleSelect}
                >
                    {console.log('sessionItem:', this.props.sessionItem)}
                    {setTimeout(function(){
                        console.log('sessionItem2:', this.props)
                },5000) }

                    <Panel eventKey="1">
                        <Panel.Heading>
                            <Panel.Title toggle>Panel heading 1</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body collapsible>Panel content 1</Panel.Body>
                    </Panel>
                    <Panel eventKey="2">
                        <Panel.Heading>
                            <Panel.Title toggle>Panel heading 2</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body collapsible>Panel content 2</Panel.Body>
                    </Panel>
                </PanelGroup>
            )

    }
}

const mapStateToProps = (state) => ({

    sessionItem: getSessionItem(state)

});


export default connect(
    mapStateToProps,
    {
        loadSessionItem
    }
)(Session);


