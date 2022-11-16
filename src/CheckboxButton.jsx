import React from "react";
import { useCheckbox, Text, Flex, Box, chakra } from '@chakra-ui/react'
import PathMatchButton from "./PathMatchButton";
import { CheckboxControl } from "formik-chakra-ui";

function CheckboxButton(props) {
    const CustomCheckbox = (props) => {
      const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
        useCheckbox(props)
  
      return (
        <chakra.label
          display='flex'
          flexDirection='row'
          alignItems='center'
          gridColumnGap={2}
          maxW='36'
          bg='green.50'
          border='1px solid'
          borderColor='green.500'
          rounded='lg'
          px={3}
          py={1}
          cursor='pointer'
          {...htmlProps}
          {...props}
        >
          <input {...getInputProps()} hidden />
          <Text color="gray.700" {...getLabelProps()}>{props.text}</Text>
        </chakra.label>
      )
    }
  
    return (
        <CustomCheckbox text={props.text}/>
    )
  }

export default CheckboxButton