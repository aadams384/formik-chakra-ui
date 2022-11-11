import React from 'react';
import { Input, propNames, Radio, Button, PinInput, PinInputField} from '@chakra-ui/react';
import { FieldConfig, useField, FormikValues, Field, Formik, FormikHandlers} from 'formik';
import { TextField } from '@material-ui/core';
import { threadId } from 'worker_threads';
import { isPropertyAccessExpression } from 'typescript';

interface Props extends FieldConfig {
    align?: 'left' | 'right' | 'center' | 'inBetween';
    type?: 'text' | 'email' | 'password' | 'number' | 'date' | 'radio' | 'checkbox' | 'radiobutton' | 'pinInput'
    text?: string;
    isTall?: boolean;
    placeholder?: string;
    fieldValue?: string;
}

const InputField = ({...props}: Props) => {
    const [field, meta] = useField(props as any);

    if (props.type === 'radio') {
        return (
            <Button {...field} width='350px' borderRadius='100px' mt='6' border='solid 1px'>{props.text}</Button>
        )
    } else if (props.type === 'pinInput') {
        return (
            <PinInputField
            {...field}
            // isInvalid={meta.touched && Boolean(meta.error)}
            border='solid 1px grey'
            borderRadius={props.align==='left' ? '8px 0 0 8px' : props.align === 'right' ? '0 8px 8px 0' : props.align === 'center' ? '8px' : props.align === 'inBetween' ? '0' : '8px'}
            height={props.isTall ? '60px' : '48px'}
            fontSize={props.isTall ? '32px' : '24px'}
            placeholder={props.placeholder}
            textAlign='center'
            width='60px'
            />
        )
    }  else return (
        <Input 
        {...field}
        isInvalid={meta.touched && Boolean(meta.error)}
        borderRadius={props.align==='left' ? '8px 0 0 8px' : props.align === 'right' ? '0 8px 8px 0' : props.align === 'center' ? '8px' : props.align === 'inBetween' ? '0' : '8px'}
        height='48px'
        fontSize='15px'
        placeholder={props.placeholder}
        fontWeight={400}
        />
    )
};

export default InputField;