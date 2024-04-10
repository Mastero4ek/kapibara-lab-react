import React from 'react';
import GalleryStyle from './Gallery.module.scss';

import { Element } from 'react-scroll';
import { galleryList } from '@helpers/constants/constants';
import { Title } from '@components/ui/heading/Title';

export const Gallery = () => {
    return (
        <Element name="gallery">
            <section>
                <div className="container">
                    <div className={GalleryStyle.root}>
                        <Title text="Галерея" />

                        <ul className={GalleryStyle.list}>
                            {
                                galleryList.map((item) => (
                                    <li key={item.id}>
                                        <img src={item.src} alt="hamster-labs" />
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </section>
        </Element>
    )
}