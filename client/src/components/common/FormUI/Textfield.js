import React, { Fragment } from 'react'
import TextField from '@mui/material/TextField'
import { useField } from 'formik'

const Textfield = ({ name, ...otherProps }) => {
    const [field, meta] = useField(name)

    const configTextfield = {
        ...field,
        ...otherProps,
        fullWidth: true,
        variant: 'outlined',
        required: true,
    }

    if (meta && meta.touched && meta.error) {
        configTextfield.error = true
        configTextfield.helperText = meta.error
    }

    return (
        <Fragment>
            <TextField {...configTextfield} />
        </Fragment>
    )
}

export default Textfield
