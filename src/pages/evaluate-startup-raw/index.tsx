import React from "react";
import * as Chakra from "@chakra-ui/react";
import { IOption, Select } from "@/src/components/Select";

export const PageEvaluateStartupIdeas = () => {
  const [state, setState] = React.useState({
    values: questions.map(() => "0"),
  });

  const handleChangeQuestion = (qIndex: number, value: string) => {
    setState((prev) => ({
      ...prev,
      values: prev.values.map((val, i) => (i === qIndex ? value : val)),
    }));
  };

  const resultOfMultiplication = state.values
    .map((val) => Number(val))
    .reduce((total, current) => {
      return current * total;
    });

  console.log(resultOfMultiplication);

  return (
    <Chakra.VStack bg="gray.50" minH="100vh" py="8">
      <Chakra.VStack w="full" maxW="container.sm" spacing="16">
        {questions.map((question, index) => (
          <Chakra.VStack key={index} w="full" align="flex-start">
            <Chakra.Text>{question.question}</Chakra.Text>
            <Select
              options={question.alternatives}
              value={state.values[index]}
              onChange={(e) => handleChangeQuestion(index, e.target.value)}
            />
          </Chakra.VStack>
        ))}
        <Chakra.Text>Total: {resultOfMultiplication}</Chakra.Text>
      </Chakra.VStack>
    </Chakra.VStack>
  );
};

const options1: IOption[] = [
  {
    label: "Unlikely",
    value: "0",
  },
  {
    label: "Yes, if the product comes out perfect",
    value: "1",
  },
  {
    label: "Yes, there is a least 50/50 chance of that",
    value: "2",
  },
  {
    label: "Yes, for sure",
    value: "3",
  },
];

const options2: IOption[] = [
  {
    label: "No",
    value: "0",
  },
  {
    label: "Yes, users can be found and paid marketing will probably work",
    value: "1",
  },
  {
    label: "Yes, not a viral product, but will have some word of mouth growth",
    value: "2",
  },
  {
    label: "Yes, the product is viral in its nature and it will find users",
    value: "3",
  },
];
const options3: IOption[] = [
  {
    label: "Not big and not growing",
    value: "0",
  },
  {
    label: "Unsure of market size and growth",
    value: "1",
  },
  {
    label: "Market is either big or growing",
    value: "2",
  },
  {
    label: "Market is big and growing",
    value: "3",
  },
];
const options4: IOption[] = [
  {
    label: "Anyone can copy it easily",
    value: "0",
  },
  {
    label: "We have a head start",
    value: "1",
  },
  {
    label: "It will take time to copy, but it is possible",
    value: "2",
  },
  {
    label: "Yes, it is very hard to copy",
    value: "3",
  },
];
const options5: IOption[] = [
  {
    label: "We don't have it and it will be hard to get it",
    value: "0",
  },
  {
    label: "It will be possible to get it",
    value: "1",
  },
  {
    label: "We have most of what is needed and can possibly get the rest",
    value: "2",
  },
  {
    label: "We have everything that is needed",
    value: "3",
  },
];

interface IQuestion {
  question: string;
  alternatives: IOption[];
}

const questions = [
  {
    question:
      "How likely you can build a product 10x better than existing solutions?",
    alternatives: options1,
  },
  {
    question: "Can you find and market to the users of this product?",
    alternatives: options2,
  },
  {
    question: "Is the market big and growing?",
    alternatives: options3,
  },
  {
    question: "How hard will be for a competitor to copy the product?",
    alternatives: options4,
  },
  {
    question:
      "Do you have the knowledge, technical resources and capital to build it?",
    alternatives: options5,
  },
];
