import React from 'react';
import HamsterImage from '@assets/image/intro/hamster-lab.png';
import IntroStyle from './Intro.module.scss';

import { FadeInRightBigDiv } from '@helpers/animations/animations';

export const Intro = () => {
    return (
        <section className={IntroStyle.root}>
            <div className="container">
                <div className={IntroStyle.wrapper}>
                    <div>
                        <h1 className={IntroStyle.title}>
                            <strong>ТОЧНЫЕ РЕЗУЛЬТАТЫ</strong>
                            <span>ТОЧНО В СРОК</span>
                        </h1>
                    </div>

                    <div className={IntroStyle.image}>
                        <FadeInRightBigDiv>
                            <img src={HamsterImage} alt="hamster-lab" />
                        </FadeInRightBigDiv>
                    </div>

                </div>
            </div>
        </section>
    )
}