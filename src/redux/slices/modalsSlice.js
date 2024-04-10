import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modalSendSuccess: false,
};

const modalsSlice = createSlice({
    name: "modals",
    initialState,
    reducers: {
        setModalSendSuccess(state, action) {
            state.modalSendSuccess = action.payload;
        },
    }
});

export const { setModalSendSuccess } = modalsSlice.actions;

export default modalsSlice.reducer;