import {
  Box,
  Button,
  Center,
  ChakraProvider,
  extendTheme,
  FormLabel,
  Input,
  SimpleGrid,
  FormControl,
  FormHelperText,
  FormErrorMessage,
  RadioGroup,
  Radio,
  Stack,
  Grid,
  GridItem,
  Flex,
  Heading,
  Hide,
  ButtonGroup,
  Image,
  Text,
  HStack,
  PinInput,
  Checkbox,
  forwardRef,
  ChakraComponent,
  CheckboxGroup,
  CheckboxIcon,
  VStack,
} from "@chakra-ui/react";
import {
  CheckboxContainer,
  CheckboxControl,
  CheckboxControlProps,
  CheckboxSingleControl,
  PercentComplete,
} from "formik-chakra-ui";
import { StepsStyleConfig as Steps } from "chakra-ui-steps";
import StepsExample from "./Stepper";
import * as yup from "yup";
import {
  Formik,
  Field,
  Form,
  FormikValues,
  useField,
  FieldConfig,
  FieldArray,
  useFormik,
} from "formik";
import InputField from "./InputField";
import MultiStepForm, { FormStep } from "./MultiStepForm";
import RadioField from "./RadioField";
import Nav from "./PathMatchNav";
import { getValue } from "@testing-library/user-event/dist/utils";
import PathMatchButtonInput from "./PathMatchButtonInput";
import HandWave from "./imgs/image.png";
import LockImage from "./imgs/lock.png";
import "@fontsource/manrope/800.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/400.css";
import PathMatchButton from "./PathMatchButton";
import CheckboxButton from "./CheckboxButton";
import { Children } from "react";
import CheckboxField from "./CheckboxField";
import "./App.css";

// const theme = extendTheme({
//   components: {
//     Steps,
//   },
// });

interface Values {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
}

const sendValues: string[] = [];

const theme = extendTheme({
  fonts: {
    heading: "Manrope",
    body: "Manrope",
  },
});

const CheckboxButtonStyles = {
  width: "350px",
  borderRadius: "100px",
  marginTop: "6",
};

const CheckboxControlStyles = {
  bg: "none",
  width: "350px",
  borderRadius: "100px",
  mt: "6",
  border: "solid .5px",
  size: "xs",
  height: "40px",
  icon: <Hide></Hide>,
  bgColor: "white",
  marginLeft: "-5",
  marginRight: "1",
  _checked: {
    border: "solid 2px #9836ef",
  },
};

const validationSchema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("").required("Please enter a valid email."),
  phone: yup.number().required("Phone number is required"),
});

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <MultiStepForm
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            pronouns: [],
          }}
          onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
        >
          <Center>
            <Box w="350px">
              <FormStep
                stepName="Example"
                onSubmit={() => console.log("Step 1")}
                validationSchema={validationSchema}
              >
                <Stack align="center" mb="6">
                  <Image
                    src={HandWave}
                    alt="hand wave"
                    width="60px"
                    height="auto"
                  />
                  <Heading>Welcome!</Heading>
                  <Heading>What's your name?</Heading>
                </Stack>
                <Flex>
                  <Stack>
                    <FormLabel textAlign="left" mb="-2" fontWeight={600}>
                      First Name
                    </FormLabel>
                    <InputField name="firstName" align="left" />
                  </Stack>
                  <Stack>
                    <FormLabel textAlign="left" mb="-2" fontWeight={600}>
                      Last Name
                    </FormLabel>
                    <InputField name="lastName" align="right" />
                  </Stack>
                </Flex>
                <FormLabel textAlign="left" mb="0" mt="2" fontWeight={600}>
                  Email Address
                </FormLabel>
                <InputField name="email" align="center" />

                <FormLabel textAlign="left" mb="0" mt="2" fontWeight={600}>
                  Phone Number
                </FormLabel>
                <InputField name="phone" align="center" />
              </FormStep>
            </Box>
          </Center>

          <Center>
            <Box w="350px">
              <FormStep
                stepName="Example"
                onSubmit={() => console.log("Step 1")}
                validationSchema={validationSchema}
              >
                <Stack align="center" mb="6">
                  <Image
                    src={LockImage}
                    alt="lock-image"
                    width="60px"
                    height="auto"
                  />
                  <Heading>Verify your Email</Heading>
                  <Text fontWeight={400}>
                    Enter the code we sent to your email address.
                  </Text>

                  <Flex>
                    <PinInput placeholder="0">
                      <InputField
                        name="digit1"
                        align="left"
                        isTall
                        type="pinInput"
                      ></InputField>
                      <InputField
                        name="digit2"
                        align="inBetween"
                        isTall
                        type="pinInput"
                      ></InputField>
                      <InputField
                        name="digit3"
                        align="inBetween"
                        isTall
                        type="pinInput"
                      ></InputField>
                      <InputField
                        name="digit4"
                        align="inBetween"
                        isTall
                        type="pinInput"
                      ></InputField>
                      <InputField
                        name="digit5"
                        align="inBetween"
                        isTall
                        type="pinInput"
                      ></InputField>
                      <InputField
                        name="digit6"
                        align="right"
                        isTall
                        type="pinInput"
                      ></InputField>
                    </PinInput>
                  </Flex>
                </Stack>
                <Center as="a" href="#">
                  <Text color="#6E19F7" fontWeight="600">
                    Resend Code
                  </Text>
                </Center>
              </FormStep>
            </Box>
          </Center>

          <Center>
            <Box w="350px">
              <FormStep
                stepName="example 2"
                onSubmit={() => console.log("Step 2")}
                validationSchema={validationSchema}
              >
                  <Heading>Tell us more about you</Heading>
                  <FormLabel textAlign="center">
                    What are your preferred pronouns?
                  </FormLabel>
                    <CheckboxContainer marginLeft='-3'name="pronouns">
                      <VStack>
                      <Center>
                      <CheckboxControl
                        value="She/Her"
                        name="pronouns"
                        bg="none"
                        borderRadius="100px"
                        mt="6"
                        outline="solid .5px"
                        size="xs"
                        height="48px"
                        icon={<Hide></Hide>}
                        bgColor="white"
                        _checked={{
                          outline: "solid 2px #9836ef",
                        }}

                      >
                      <Center>
                        <Text>She/Her</Text>
                      </Center>
                      </CheckboxControl>
                      </Center>
                      <CheckboxControl
                        value="He/Him"
                        name="pronouns"
                        bg="none"
                        width="350px"
                        borderRadius="100px"
                        mt="6"
                        outline="solid .5px"
                        size="xs"
                        height="48px"
                        icon={<Hide></Hide>}
                        bgColor="white"
                        _checked={{
                          outline: "solid 2px #9836ef",
                        }}
                      >
                          <Text>He/Him</Text>
                      </CheckboxControl>
                      
                      </VStack>
                    </CheckboxContainer>
                    {/* <RadioField as='Checkbox' name='pronouns' value='She/Her' text='She/Her'></RadioField> */}
              </FormStep>
            </Box>
          </Center>

          <Center>
            <Box w="350px">
              <FormStep
                stepName="example 2"
                onSubmit={() => console.log("Step 2")}
                validationSchema={validationSchema}
              >
                <Center>
                  <Heading>Checkbox buttons?</Heading>
                </Center>
                <Stack>
                  <InputField
                    type="radio"
                    name="pronouns"
                    value="She/Her"
                    text="She/Her"
                  ></InputField>
                </Stack>
                <Center></Center>
              </FormStep>
            </Box>
          </Center>
        </MultiStepForm>
      </Box>
    </ChakraProvider>
  );
};

export default App;
