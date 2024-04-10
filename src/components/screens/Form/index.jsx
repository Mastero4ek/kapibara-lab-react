import React, { useState } from 'react';
import FormStyle from './Form.module.scss';

import { Element } from 'react-scroll';
import { Title } from '@components/ui/heading/Title';
import { Button } from '@components/ui/buttons/Button';
import { Input } from '@components/ui/inputs/Input';

import { useMediaQuery } from 'react-responsive';
import { useSelector, useDispatch } from 'react-redux';
import { setModalSendSuccess } from '@redux/slices/modalsSlice';
import { sendUserData } from '@redux/slices/formSlice';
import { unwrapResult } from '@reduxjs/toolkit';

import { onChangeInput } from '@helpers/helpers';

import { FadeInUpDiv } from '@helpers/animations/animations';

export const Form = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 48em)' });
    const { serverStatus, errorString } = useSelector((state) => state.form);

    const [inputFirstName, setInputFirstName] = useState({ value: "", error: false });
    const [inputSecondName, setInputSecondName] = useState({ value: "", error: false });
    const [inputSurname, setInputSurname] = useState({ value: "", error: false });

    const dispatch = useDispatch();

    const handleClickSubmit = async () => {
        //обычно валидацию делаю на сервере
        if (inputFirstName.value.length < 2 || inputFirstName.value.length > 15) {
            setInputFirstName({ value: inputFirstName.value, error: true });
        }

        if (inputSecondName.value.length < 5 || inputSecondName.value.length > 20) {
            setInputSecondName({ value: inputSecondName.value, error: true });
        }

        if (inputSurname.value.length < 5 || inputSurname.value.length > 15) {
            setInputSurname({ value: inputSurname.value, error: true });
        }

        //отправка формы
        try {
            const resultAction = await dispatch(sendUserData(
                {
                    secondName: inputSecondName.value,
                    firstName: inputFirstName.value,
                    surname: inputSurname.value
                }
            ));

            const originalPromiseResult = unwrapResult(resultAction);

            if (!originalPromiseResult) return;

            await dispatch(setModalSendSuccess(true));

            setInputFirstName({ value: "", error: false });
            setInputSecondName({ value: "", error: false });
            setInputSurname({ value: "", error: false });

            setTimeout(() => {
                dispatch(setModalSendSuccess(false));
            }, 3000);
        } catch (rejectedValueOrSerializedError) {
            console.log(rejectedValueOrSerializedError);
        }
    };

    return (
        <FadeInUpDiv>
            <Element name="form">
                <section>
                    <div
                        className="container"
                        style={isTabletOrMobile ? { padding: 0 } : { padding: 0 }}
                    >

                        <div className={FormStyle.root}>
                            <div className={FormStyle.content}>
                                <Title text="Заявка на диагностику" />

                                <p>Доверьте свои медицинские исследования надежным капибарам-лаборантам и получите качественные
                                    результаты в кратчайшие сроки!</p>
                            </div>

                            <form className={FormStyle.controls}>
                                <Input
                                    error={inputSecondName.error}
                                    id="second-name"
                                    value={inputSecondName.value}
                                    onChange={(e) => onChangeInput(e, setInputSecondName)}
                                    name="second-name"
                                    type="text"
                                    placeholder="Фамилия"
                                    disabled={serverStatus === "loading" ? true : false}
                                >
                                    {
                                        inputSecondName.error && <span>Фамилия должна содержать от 5 до 20 букв!</span>
                                    }
                                </Input>

                                <Input
                                    error={inputFirstName.error}
                                    id="first-name"
                                    value={inputFirstName.value}
                                    onChange={(e) => onChangeInput(e, setInputFirstName)}
                                    name="first-name"
                                    type="text"
                                    placeholder="Имя"
                                    disabled={serverStatus === "loading" ? true : false}
                                >
                                    {
                                        inputFirstName.error && <span>Имя должно содержать от 2 до 15 букв!</span>
                                    }
                                </Input>

                                <Input
                                    error={inputSurname.error}
                                    id="surname"
                                    value={inputSurname.value}
                                    onChange={(e) => onChangeInput(e, setInputSurname)}
                                    name="surname"
                                    type="text"
                                    placeholder="Отчество"
                                    disabled={serverStatus === "loading" ? true : false}
                                >
                                    {
                                        inputSurname.error && <span>Отчество должно содержать от 5 до 15 букв!</span>
                                    }
                                </Input>

                                {
                                    errorString !== "" ? <strong>{errorString}</strong> : <></>
                                }


                                <div className={FormStyle.btn}>
                                    <Button
                                        disabled={serverStatus === "loading" ? true : false}
                                        onClickBtn={() => handleClickSubmit()}
                                        svgId="checkmark"
                                        text={
                                            serverStatus === "loading" ?
                                                "Отправка..." :
                                                serverStatus === "error" ?
                                                    "Ошибка!" :
                                                    "Отправить"
                                        }
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </Element>
        </FadeInUpDiv>
    )
}