import React from 'react';
import ReactDOM from 'react-dom';

import Toggle from './toggle/component.js';

import './index.scss';

const App = () => {
    //For props checking
    //const textItems = ['MUST CONTAIN', 'MUST NOT CONTAIN'];
    //const value = false;

    return (
        <div className={'container'}>
            <Toggle
                //textItems={textItems}
                //value={stateValue}
            />
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));
