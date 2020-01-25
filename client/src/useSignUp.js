import { useState } from 'react';

import { useLocalStorage } from './useLocalStorage';

export const useSignUp = (initialValues = {}, submitCb) => {

    const [values, setValues] = useLocalStorage(initialValues);

    const handleChanges = e => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        submitCb();
    };

    const clear = e => {
        e.preventDefault();
        setValues(initialValues);
    };

    return [values, handleChanges, handleSubmit, clear];
};