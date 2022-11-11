import { FormikValues } from 'formik';
import React from 'react'
import { Button, Center, Flex } from '@chakra-ui/react';

interface Props {
    hasPrevious?: boolean;
    onBackClick: (values: FormikValues) => void;
    isLastStep: boolean;
}

const FormNavigation = (props: Props) => {
    return (
        <Center>
            <Button type="submit" width='350px' borderRadius='100px' mt='6' bgGradient='linear(to-r, #9836ef, #3654fb)' color='white'>{props.isLastStep ? 'Submit' : 'Next →'}</Button>
        </Center>
    )
}

export default FormNavigation