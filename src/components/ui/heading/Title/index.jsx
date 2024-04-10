import React from 'react';
import TitleStyle from './Title.module.scss';

export const Title = ({ text }) => {
    return (
        <h2 className={TitleStyle.root}>{text}</h2>
    )
}