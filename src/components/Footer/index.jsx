import React from 'react';
import FooterStyle from './Footer.module.scss';
import Logo from '@assets/image/footer/logo-footer.svg';

import { animateScroll as scroll } from 'react-scroll';

export const Footer = () => {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <footer className={FooterStyle.root}>
            <div className="container">
                <div className={FooterStyle.wrapper}>
                    <span className={FooterStyle.rights}>Все права защищены Российской Ассоциацией Капибар</span>

                    <a onClick={scrollToTop} className={FooterStyle.logo}>
                        <img src={Logo} alt="logo" />
                    </a>
                </div>
            </div>
        </footer>
    )
}