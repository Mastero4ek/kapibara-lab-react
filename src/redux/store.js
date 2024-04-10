import { configureStore } from "@reduxjs/toolkit";
import modals from '@redux/slices/modalsSlice';
import form from '@redux/slices/formSlice';

export const store = configureStore({
    reducer: {
        modals,
        form
    },
});