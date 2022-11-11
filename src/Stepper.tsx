import { Button, Flex, Input, FormLabel } from '@chakra-ui/react';
import { Step, Steps, useSteps } from 'chakra-ui-steps';
import { Formik } from 'formik';
import { TextField } from '@material-ui/core';

const content1 = (
    <Flex py={4}>
    <Formik initialValues={{
        firstName: '',
        lastName: '',
        age: 0,
        email: '',
    }}
    onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
    }}
    >
        {(formik) => (
            <form onSubmit={formik.handleSubmit}>
                <FormLabel>First Name</FormLabel>
                <Input 
                    id="firstName"
                    name="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                />

            </form>    
        )}
    </Formik>
  </Flex>
);


const steps = [
    {
        label: 'Step 1',
    },
    {
        label: 'Step 2',
    }
];




export const StepsExample = () => {
  const { nextStep, prevStep, setStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });

  return (
    <Flex flexDir="column" width="100%">
      <Steps activeStep={activeStep}>
        {steps.map(({ label }) => (
          <Step label={label} key={label}>
            {content1}
          </Step>
        ))}
      </Steps>
      {activeStep === steps.length ? (
        <Flex p={4}>
          <Button mx="auto" size="sm" onClick={reset}>
            Reset
          </Button>
        </Flex>
      ) : (
        <Flex width="100%" justify="flex-end">
          <Button
            isDisabled={activeStep === 0}
            mr={4}
            onClick={prevStep}
            size="sm"
            variant="ghost"
          >
            Prev
          </Button>
          <Button size="sm" onClick={nextStep}>
            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </Flex>
      )}
    </Flex>
  );
};

export default StepsExample;
