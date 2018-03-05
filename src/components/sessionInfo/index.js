import React from 'react';

class sessionInfo extends React.Component {

    render() {

        return(
            <div>
                <div>Название выступления:</div>
                <div></div>
                <div>{console.log('компонент sessionInfo', this.props.sessionInfo.map((el) => (el.title)) )}</div>
            </div>
        )
    }

}

export default sessionInfo