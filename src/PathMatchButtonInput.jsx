import React from 'react';
import { Field } from 'formik';

import PathMatchButton from './PathMatchButton';
const fieldName = 'pathMatchButton';

const PathMatchButtonInput = (props) => {

    return (
    <Field name={fieldName} type='radio' value='She/Her'>
        {({ field, 
            form: { touched, errors },
            ...props
        
        }) => (
            <div>
            <PathMatchButton {...field} {...props} text={props.text}/>
            {touched[fieldName] && errors[fieldName] && <div>{errors[fieldName]}</div>}
            </div>
        )}
    </Field>
    );
}

export default PathMatchButtonInput;