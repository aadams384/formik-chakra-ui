import { Formik, FormikValues } from 'formik';
import { Button } from '@chakra-ui/react';
import React from 'react';

interface Props {
    hasPrevious?: boolean;
    onBackClick: (values: FormikValues) => void;
    isLastStep?: boolean;
}

const FormNavigation = (props: Props) => {

    return (
        <div>
            {props.hasPrevious && (
            <Button onClick={props.onBackClick}>Back</Button>
            )}

            <Button type="submit">{props.isLastStep ? 'Submit' : 'Next'}</Button>
        </div>
    )
}

export default FormNavigation