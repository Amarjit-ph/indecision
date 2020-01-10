import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        <div className='widget-header'>
            <h3 className="widget-header__title"> Your Options</h3>
            <button
                className='button button--link'
                onClick={props.deleteOptions}>
                Remove All</button>


        </div>
        {props.options.length === 0 && <h3 className='widget-message'>Please Add Task to get started</h3>}
        {props.options.map((option, index) => (
            <Option key={option}
                optionText={option}
                count={index + 1}
                handleDeleteOption={props.handleDeleteOption} />))}

    </div>
);

export default Options;