import React from 'react';
import { Link } from 'react-scroll';

import { Icon } from '@components/ui/icons/Icon';
import ButtonStyle from './Button.module.scss';

import { FadeInDiv } from '@helpers/animations/animations';

export const Button = ({ text, svgId, scroll = false, scrollTo, onClickBtn, disabled }) => {
    if (scroll) {
        return (
            <FadeInDiv>
                <Link
                    to={scrollTo}
                    spy={true}
                    smooth={true}
                    duration={500}
                >
                    <button className={ButtonStyle.root} >
                        <span>{text}</span>

                        <Icon id={svgId} />
                    </button >
                </Link >
            </FadeInDiv>
        )
    } else {
        return (
            <FadeInDiv>
                <button disabled={disabled} className={ButtonStyle.root} onClick={() => onClickBtn()}>
                    <span>{text}</span>

                    <Icon id={svgId} />
                </ button>
            </FadeInDiv>
        )
    }
}