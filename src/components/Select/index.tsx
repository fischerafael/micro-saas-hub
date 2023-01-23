import React from "react";
import * as Chakra from "@chakra-ui/react";

export interface IOption {
  label: string;
  value: string;
}

interface ISelect extends Chakra.SelectProps {
  options: IOption[];
}

export const Select = ({ options, ...props }: ISelect) => {
  return (
    <Chakra.Select {...props}>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </Chakra.Select>
  );
};
