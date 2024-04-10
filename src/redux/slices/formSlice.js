import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from '@helpers/constants/constants';

let error = "";

export const sendUserData = createAsyncThunk(
    "user/sendUserDataStatus",
    async ({ secondName, firstName, surname }) => {
        try {
            const response = await axios.post(`${API_URL}/send-user-data`, ({ secondName, firstName, surname }));

            return response.data;
        } catch (e) {
            error = e.response?.data?.message;

            //имитация отправки
            return (
                {
                    secondName: "Чирков-Панин",
                    firstName: "Вячеслав",
                    surname: "Сергеевич"
                }
            );
        }
    }
);

const initialState = {
    secondName: "",
    firstName: "",
    surname: "",
    serverStatus: "",
    errorString: "",
};

const formSlice = createSlice({
    name: "form",
    initialState,
    extraReducers: {
        [sendUserData.pending]: (state) => {
            state.serverStatus = "loading";
            state.secondName = "";
            state.firstName = "";
            state.surname = "";
            state.errorString = "";
        },
        [sendUserData.fulfilled]: (state, action) => {
            state.serverStatus = !error ? "error" : "success";
            state.secondName = !action.payload ? "" : action.payload.secondName;
            state.firstName = !action.payload ? "" : action.payload.firstName;
            state.surname = !action.payload ? "" : action.payload.surname;
            state.errorString = !error ? "Сервер не отвечает! Попробуйте позднее!" : error;
        },
        [sendUserData.rejected]: (state) => {
            state.serverStatus = "";
            state.secondName = "";
            state.firstName = "";
            state.surname = "";
            state.errorString = "";
        },
    }
});

export default formSlice.reducer;