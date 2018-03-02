import React from 'react';
import {connect} from 'react-redux';
import {getSessionItem} from './selectors';
import {loadSessionItem} from './action';
import {PanelGroup, Panel} from 'react-bootstrap';

class Session extends React.Component {
    constructor() {
        super();

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
        console.log(this.props.sessionItem);
        return this.props.sessionItem.map((el) => {
            return console.log(el);
        })
    }

    render() {
        let session = <div>Nu takoe</div>;
        return (
            <div>{session}
                <div className={'takoe'}>{setTimeout(function () {
                   return this.props.sessionItem.map((el) => { return <div>{el.title} {console.log(el)}</div>
                })
                }.bind(this), 50)
                }</div>
            </div>


            /*<PanelGroup
                accordion
                id="accordion-controlled-example"
                activeKey={this.state.activeKey}
                onSelect={this.handleSelect}
            >
                {console.log('sessionItem:', this.props.sessionItem)}





                <Panel eventKey="2">
                    <Panel.Heading>
                        <Panel.Title toggle>Panel heading 2</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body collapsible>Panel content 2
                        <button onClick={() => this.click()}>Console.log</button>
                    </Panel.Body>

                </Panel>

            </PanelGroup>*/
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


