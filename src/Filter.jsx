import React from 'react';
import './index.css';

export default class Filter extends React.Component {
    render() {
        return(
            <div className="filter">
                <div className="panel-label-center">Filter</div>
                <div className="knob-box">
                    <div className="frequency-knob">
                        <img src="./assets/Knob.png" alt="Knob" />
                    </div>
                    <div className="type-knob">
                        <img src="./assets/Knob.png" alt="Knob" />
                    </div>
                    <div className="rolloff-knob">
                        <img src="./assets/Knob.png" alt="Knob" />
                    </div>
                </div>
            </div>
        );
    }
}