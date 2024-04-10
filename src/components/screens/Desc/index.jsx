import React from 'react';

import DescStyle from './Desc.module.scss';

export const Desc = () => {
    return (
        <div className="container">
            <p className={DescStyle.root}>
                Добро пожаловать в медицинскую лабораторию KapibaraLab, где работают исключительно капибары — ваш
                надежный партнер в обеспечении качественной и точной диагностики! </p>
        </div>
    )
}