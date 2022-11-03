import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useFormik } from 'formik';
import { Input, FormControl, FormLabel, Center, SimpleGrid, Box, Button} from '@chakra-ui/react'
import * as yup from 'yup';

import { ChakraProvider } from '@chakra-ui/react'
import MultiStepForm, { FormStep } from './MultiStepForm';

const validationSchema = yup.object({
  firstName: yup.string().required('First Name is Required'),
})

function App() {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2))
    },
    validationSchema: validationSchema
  })

  return (
    <ChakraProvider>
      <Center>
      <MultiStepForm 
      initialValues={formik.initialValues}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2))
      }}>
        <FormStep stepName="Person">
            <FormLabel>First Name</FormLabel>
            <Input
              id='firstName'
              name='firstName'
              type='name'
              size = 'sm'
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />
        </FormStep>
        <FormStep stepName="Person" onSubmit={() => console.log('submitting')}>
          <FormLabel>Last Name</FormLabel>
          <Input
            id='lastName'
            name='lastName'
            type='name'
            size = 'sm'
            // onChange={formik.handleChange}
            // value={formik.values.lastName}
          />
        </FormStep>
      </MultiStepForm>
      </Center>
    </ChakraProvider>
  )
}

export default App;
