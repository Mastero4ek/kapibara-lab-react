import React from 'react';
import ErrorStyle from './Error.module.scss';

import { Link } from 'react-router-dom';

export const Error = () => {
    return (
        <div className={ErrorStyle.root}>
            <div title="404">404</div>

            <Link to='' className={ErrorStyle.btn}>
                <span>Вернуться на главную</span>
            </Link>
        </div>
    )
}