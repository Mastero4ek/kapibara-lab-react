import React from 'react';
import ModalStyle from './ModalSendSuccess.module.scss';
import Checkmark from '@assets/image/popup/checkmark.svg';

import { useMediaQuery } from 'react-responsive';

import { Overlay } from '@layouts/Overlay';

export const ModalSendSuccess = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 48em)' });

    return (
        <Overlay>
            <div onClick={(e) => e.stopPropagation()} className={ModalStyle.root}>
                <div
                    className="container"
                    style={isTabletOrMobile ? { padding: 0 } : { padding: 0 }}
                >
                    <div className={ModalStyle.wrapper}>
                        <div className={ModalStyle.content}>
                            <div className={ModalStyle.image}>
                                <img src={Checkmark} alt="checkmark" />
                            </div>

                            <span>Спасибо за предоставленную информацию,мы свяжемся с вами в ближайшее время.</span>
                        </div>
                    </div>
                </div>
            </div>
        </Overlay>
    )
}