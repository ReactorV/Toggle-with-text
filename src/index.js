import React from 'react';
import ReactDOM from 'react-dom';

import Toggle from './toggle/component.js';
import './index.scss';

//For props checking
//const textItems = ['MUST CONTAIN', 'MUST NOT CONTAIN'];
//const value = false;

const App = () => {
    return (
        <div className={'container'}>
            <Toggle
                //textItems={textItems}
                //value={value}
            />
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));
