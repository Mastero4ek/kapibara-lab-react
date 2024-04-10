import React from 'react';
import Typewriter from 'typewriter-effect';

import DescStyle from './Desc.module.scss';

export const Desc = () => {
    const descString = `Добро пожаловать в медицинскую лабораторию KapibaraLab, где работают исключительно капибары — ваш
    надежный партнер в обеспечении качественной и точной диагностики!`;

    return (
        <div className="container">
            <div className={DescStyle.root}>
                <Typewriter
                    options={{ cursor: "", delay: 30 }}
                    onInit={(typewriter) => { typewriter.typeString(descString).start(); }}
                />
            </div>
        </div>
    )
}