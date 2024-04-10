import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '@components/Header';
import { Footer } from '@components/Footer';
import { ModalSendSuccess } from '@screens/Modals/ModalSendSuccess';

import { useSelector } from 'react-redux';

export const MainLayout = () => {
    const { modalSendSuccess } = useSelector((state) => state.modals);

    return (
        <div>
            <Header />

            <main className="main">
                <Outlet />

                {
                    modalSendSuccess && <ModalSendSuccess />
                }
            </main>

            <Footer />
        </div>
    )
}