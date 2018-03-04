import React from 'react';
import {connect} from 'react-redux';
import {getSessionItem} from './selectors';
import {loadSessionItem} from './action';
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
    };

    handleClick = () => (this.props.sessionItem.map((el) => {
            console.log(el);
        })
    );

    renderSession = (array) => (array && array.map((el) => (
            <Panel eventKey={el.id}>
                <Panel.Heading>
                    <Panel.Title toggle>{el.title}</Panel.Title>
                </Panel.Heading>
                <Panel.Body collapsible>Panel content 2
                    <button onClick={this.handleClick}>Console.log</button>
                </Panel.Body>
            </Panel>
        ))
    );

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

                    <Panel eventKey="2">
                        <Panel.Heading>
                            <Panel.Title toggle>Panel heading 2</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body collapsible>Panel content 2
                            <button onClick={this.handleClick}>Console.log</button>
                        </Panel.Body>
                    </Panel>
                    <Panel eventKey="3">
                        <Panel.Heading>
                            <Panel.Title toggle>Panel heading 2</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body collapsible>Panel content 2
                            <button onClick={this.handleClick}>Console.log</button>
                        </Panel.Body>
                    </Panel>
                </PanelGroup>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({sessionItem: getSessionItem(state)});

export default connect(mapStateToProps, {loadSessionItem})(Session);
