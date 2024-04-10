import React from 'react';
import IconSprite from '@assets/image/icons.svg';

export const Icon = ({ id }) => {
    return (
        <svg>
            <use href={IconSprite + '#' + id}></use>
        </svg>
    )
}