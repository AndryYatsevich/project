import React from 'react';
import {connect} from 'react-redux';
import {getSessionItem} from './selectors';
import {loadSessionItem} from './action';
import {PanelGroup, Panel} from 'react-bootstrap';

class Session extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleSelect = this.handleSelect.bind(this);
        this.state = {
            activeKey: '1'
        };
    }

    handleSelect(activeKey) {
        this.setState({activeKey});
    }

    componentDidMount() {
        this.props.loadSessionItem();
    }

    click() {
        return this.props.sessionItem.map((el) => {
            return console.log(el);
        })
    }

    render() {
        return (
            <div>
                <PanelGroup
                    accordion
                    id="accordion-controlled-example"
                    activeKey={this.state.activeKey}
                    onSelect={this.handleSelect}
                >
                    {setTimeout( function()  {
                        this.props.sessionItem.map((el) => {
                        return (<Panel eventKey={el.id}>
                            {console.log(el)}
                            <Panel.Heading>
                                <Panel.Title toggle>{el.title}</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body collapsible>Panel content 2
                                <button onClick={() => this.click()}>Console.log</button>
                            </Panel.Body>

                        </Panel>)
                    })}.bind(this), 1000)}


                    <Panel eventKey="2">
                        <Panel.Heading>
                            <Panel.Title toggle>Panel heading 2</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body collapsible>Panel content 2
                            <button onClick={() => this.click()}>Console.log</button>
                        </Panel.Body>

                    </Panel>
                    <Panel eventKey="3">
                        <Panel.Heading>
                            <Panel.Title toggle>Panel heading 2</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body collapsible>Panel content 2
                            <button onClick={() => this.click()}>Console.log</button>
                        </Panel.Body>

                    </Panel>

                </PanelGroup>
            </div>
        )

    }
}

const mapStateToProps = (state) => {

    return {sessionItem: getSessionItem(state)}

};


export default connect(
    mapStateToProps,
    {
        loadSessionItem
    }
)(Session);


