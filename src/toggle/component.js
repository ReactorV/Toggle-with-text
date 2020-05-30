import React, { useState } from 'react';

import './index.scss';

const baseClassName = 'toggle';

const defaultTextValues = ['IS', 'IS NOT'];
const defaultValue = true;

const Toggle = ({ textItems = [...defaultTextValues], value = defaultValue }) => {
    const [ isActive, setActive ] = useState(value);

    const getClassNames = () => {
        return {
            component: `${baseClassName}`,
            componentActive: `${baseClassName} active`,
            label: `${baseClassName}__label`,
            labels: `${baseClassName}__labels`,
            selection: `${baseClassName}__selection`,
            button: `${baseClassName}__button`
        };
    };

    const classNames = getClassNames();

    const classNameToggle = isActive ? classNames.componentActive : classNames.component;

    return (
        <div className={classNameToggle}>
            <div className={classNames.labels}>
                <div className={classNames.label}>
                    {textItems[0]}
                </div>
                <div className={classNames.label}>
                    {textItems[1]}
                </div>
            </div>
            <button
                className={classNames.button}
                onClick={() => setActive(!isActive)}
            />
            <span className={classNames.selection}/>
        </div>
    );
};

export default Toggle;
