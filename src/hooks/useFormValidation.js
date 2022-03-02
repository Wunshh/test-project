import  { useState, useCallback } from 'react';

function useFormValidation() {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});

    const handleChange = (evt) => {
        const input = evt.target;
        const value = input.value;
        const name = input.name;
        
        setValues(prevState => ({ ...prevState, [name]: value }));
        setErrors(prevState => ({ ...prevState, [name]: input.validationMessage }));
    }

    const resetForm = useCallback(
        (newValues = {}, newErrors = {}) => {
            setValues(newValues);
            setErrors(newErrors);
        },
        [setValues, setErrors]
    )

    return {values, handleChange, resetForm, errors}
}


export default useFormValidation;