import React from 'react';
import OverlayStyle from './Overlay.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setModalSendSuccess } from '@redux/slices/modalsSlice';

import { FadeInDiv } from '@helpers/animations/animations';

export const Overlay = ({ children }) => {
    const { modalSendSuccess } = useSelector((state) => state.modals);
    const dispatch = useDispatch();

    const handleClickOverlay = () => {
        dispatch(setModalSendSuccess(false));
    };

    return (
        <FadeInDiv>
            <div
                onClick={() => handleClickOverlay()}
                className={modalSendSuccess ? OverlayStyle.root + " " + OverlayStyle.show : OverlayStyle.root}
            >
                {children}
            </div>
        </FadeInDiv>
    )
}