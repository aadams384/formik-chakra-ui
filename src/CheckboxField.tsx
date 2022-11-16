import React from "react";
import { useField } from "formik";
import { Button } from "@chakra-ui/react";
import PathMatchButton from "./PathMatchButton";

interface Props {
  text?: string;
}

const RadioField = ({ ...props }: any) => {
  const [field, meta, helpers] = useField(props.name);
  const { setValue } = helpers;
  const { value } = meta;

  const isSelected = (val: string) => (val === value ? "selected" : "");

  return (
    <Button
      _focus={{ border: "solid 2px black" }}
      _selected={{ border: "solid 2px black" }}
      bg="none"
      width="350px"
      borderRadius="100px"
      mt="6"
      border="solid .5px"
      onClick={() => setValue(props.text)}
    >
      {props.text}
    </Button>
  );
};

export default RadioField;
