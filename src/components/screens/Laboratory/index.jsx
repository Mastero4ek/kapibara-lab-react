import React, { useState } from 'react';
import { Element } from 'react-scroll';

import LabStyle from './Laboratory.module.scss';
import HamsterImage from '@assets/image/laboratory/hamster-lab.png';

import { Title } from '@components/ui/heading/Title';
import { Button } from '@components/ui/buttons/Button';

import { FadeInRightBigDiv } from '@helpers/animations/animations';

export const Laboratory = () => {
    return (
        <Element name="laboratory">
            <section className={LabStyle.root}>
                <div className="container">
                    <div className={LabStyle.wrapper}>
                        <div className={LabStyle.content}>
                            <Title text="Лаборатория" />

                            <div className={LabStyle.image}>
                                <FadeInRightBigDiv>
                                    <img src={HamsterImage} alt="hamster-lab" />
                                </FadeInRightBigDiv>
                            </div>

                            <p>
                                <span>
                                    Наша лаборатория предлагает широкий спектр медицинских исследований, проводимых опытными
                                    капибарами-лаборантами. Мы специализируемся на анализе биоматериалов, микробиологических
                                    исследованиях, генетической диагностике и многом другом.
                                </span>
                                <span>
                                    Мы используем
                                    современное
                                    оборудование и методики и гарантируем точность и надежность результатов.
                                </span>
                            </p>

                            <Button
                                text='Оставить заявку'
                                svgId="arrow-right"
                                scroll={true}
                                scrollTo="form"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </Element>
    )
}
