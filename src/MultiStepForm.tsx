import { Box, Button, Center, Divider, Flex, HStack, SimpleGrid, Stack, VStack, Image } from '@chakra-ui/react';
import { FormikConfig, FormikValues, Formik, FormikHandlers, FormikHelpers, Form} from 'formik';
import React, { useState } from 'react';
import FormNavigation from './FormNavigation';
import PathMatchLogo from './imgs/PathMatchLogo.png';

interface Props extends FormikConfig<FormikValues> {
    children: React.ReactNode;
    isButton?: boolean;
}


const MultiStepForm = ({ children, initialValues, onSubmit }: Props) => {
    const [stepNumber, setStepNumber] = useState(0);
    const steps = React.Children.toArray(children) as React.ReactElement[];

    const [snapshot, setSnapshot] = useState(initialValues);

    const step = steps[stepNumber];
    const totalSteps = steps.length;
    const isLastStep = stepNumber === totalSteps - 1;

    const next = (values: FormikValues) => {
        setSnapshot(values);
        setStepNumber(stepNumber + 1);
    }
    
    const previous = (values: FormikValues) => {
        setSnapshot(values);
        setStepNumber(stepNumber - 1);
    }

    const handleButtonClick = (values: FormikValues) => {
        setSnapshot(values);
    }


    const handleSubmit = async (values: FormikValues, actions: FormikHelpers<FormikValues>) => {

        if (step.props.onSubmit) {
            await step.props.onSubmit(values);
        }

        if (isLastStep) {
            return onSubmit(values, actions);
        } else {
            actions.setTouched({});
            next(values);
        }
    }

    return <div>
            <SimpleGrid columns={3} h='80px'>
                    <Flex mt='auto' mb='auto' ml='8'>
                    {stepNumber > 0 && <Button onClick={() => previous(snapshot)} justifyContent='space-between' borderRadius='100px' bg='white' border='1px solid #EBEBEC'> ← Back</Button>}
                    </Flex>
                <Center>
                    <a href='pathmatch.com'>
                    <Image src={PathMatchLogo} alt='PathMatch Logo' width='150px' height='auto' />
                    </a>
                </Center>
                <Box></Box>
            </SimpleGrid>   
        <Divider mb='5' bg='black'/>
        <Center>
      <Center bg='red' h='8px' w='290px' mb='10'>Loading Bar</Center>
      </Center>
        <Formik
            initialValues={snapshot}
            onSubmit={handleSubmit}
            validationSchema={step.props.validationSchema}
        >
            {formik => (<Form>

            {step}
            
            <FormNavigation 
                isLastStep={isLastStep} 
                hasPrevious={stepNumber > 0} 
                onBackClick={() => previous(formik.values)} 
            />
            
            

        </Form>)}
        </Formik>
    </div>
}

export default MultiStepForm

export const FormStep = ({ stepName = '', children, isRadio }: any) => children