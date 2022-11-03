import { FormikConfig, FormikValues, Formik, useFormik, FormikHelpers } from "formik";
import React, { useState } from "react";
import FormNavigation from "./FormNavigation";

interface Props extends FormikConfig<FormikValues>{
    children: React.ReactNode;
}

// eslint-disable-next-line react-hooks/rules-of-hooks


const MultiStepForm = ({ children, initialValues, onSubmit }: Props) => {

    const [stepNumber, setStepNumber] = useState(0)
    const steps = React.Children.toArray(children) as React.ReactElement[];
    
    const [snapshot, setSnapshot] = useState(initialValues);

    const currentStep = steps[stepNumber];
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

    const handleSubmit = async (values: FormikValues, actions: FormikHelpers<FormikValues>) => {
        if (currentStep.props.onSubmit) {
            await currentStep.props.onSubmit(values);
        }
        if (isLastStep) {
            return onSubmit(values, actions);
        } else {
            actions.setTouched({});
            next(values);
        }
    };

    return <div>
        <Formik
        initialValues={snapshot} 
        onSubmit={handleSubmit} 
        validationSchema={currentStep.props.validationSchema}>
        {(formik) => <form onSubmit={formik.handleSubmit}>
            {currentStep}
            <FormNavigation 
                isLastStep={isLastStep} 
                hasPrevious={stepNumber > 0}
                onBackClick={() => previous(formik.values)} 
             />    
        </form>}
        
        </Formik>
    </div>
}

export default MultiStepForm;

export const FormStep = ({stepName = '', children}: any) => children;