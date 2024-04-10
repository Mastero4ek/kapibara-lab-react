import React from 'react';

import { navbarList } from '@helpers/constants/constants';
import { Link } from 'react-scroll';

import NavbarStyle from './Navbar.module.scss';

export const Navbar = () => {
    return (
        <nav>
            <ul className={NavbarStyle.root}>
                {
                    navbarList.map((nav) => (
                        <li key={nav.id}>
                            <Link
                                activeClass={NavbarStyle.linkActive}
                                to={nav.idElement}
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                <span>{nav.name}</span>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}