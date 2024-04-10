import React from 'react';
import { useMediaQuery } from 'react-responsive';

import { Icon } from '@components/ui/icons/Icon';
import { Link } from 'react-router-dom';
import { Navbar } from '@layouts/Navbar';

import HeaderStyle from './Header.module.scss';
import Logo from '@assets/image/header/logo.svg';

import { JelloDiv } from '@helpers/animations/animations';

export const Header = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 48em)' });

    return (
        <header>
            <div className="container">
                <div className={HeaderStyle.root}>
                    <div className={HeaderStyle.logo}>
                        <Link to="/">
                            <img src={Logo} alt="logo" />
                        </Link>

                        <span>Современные методики диагностики</span>
                    </div>

                    {
                        !isTabletOrMobile && <Navbar />
                    }

                    <div className={HeaderStyle.contacts}>
                        <a href="tel:71234567890">
                            <JelloDiv>
                                <Icon id="phone" />
                            </JelloDiv>

                            <div className={HeaderStyle.contactsContent}>
                                <b>+7 123 456 7890</b>
                                <span>Звонок бесплатный</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}