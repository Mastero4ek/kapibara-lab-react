export const onChangeInput = (e, setInput) => {
    setInput({ value: e.target.value, error: false });
};