import React from 'react';
import InputStyle from './Input.module.scss';

export const Input = ({ ...props }) => {
    return (
        <div className={InputStyle.root}>
            <input
                style={props.error ? { borderColor: '#E17373' } : { borderColor: 'transparent' }}
                disabled={props.disabled}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                name={props.name}
                type={props.type}
                placeholder={props.placeholder}
            />
            {props.children}
        </div>
    )
}