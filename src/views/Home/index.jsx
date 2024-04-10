import React from 'react';

import { Intro } from '@components/screens/Intro';
import { Desc } from '@components/screens/Desc';
import { Laboratory } from '@components/screens/Laboratory';
import { Gallery } from '@components/screens/Gallery';
import { Form } from '@components/screens/Form';

export const Home = () => {
    return (
        <>
            <Intro />
            <Desc />
            <Laboratory />
            <Gallery />
            <Form />
        </>
    )
}