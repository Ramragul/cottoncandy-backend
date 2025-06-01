import React, { useState } from "react";
import {
  Box,
  Button,
  Heading,
  Radio,
  RadioGroup,
  Stack,
  Text,
  VStack,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";

type Question = {
  id: number;
  questionText: string;
  options: string[];
  correctAnswer: string;
};

const sampleQuestions: Question[] = [
  {
    id: 1,
    questionText: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correctAnswer: "4",
  },
  {
    id: 2,
    questionText: "What is the capital of India?",
    options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
    correctAnswer: "Delhi",
  },
  {
    id: 3,
    questionText: "Which is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correctAnswer: "Jupiter",
  },
];

export const TestPage: React.FC = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerChange = (questionId: number, answer: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const handleSubmit = () => {
    let calculatedScore = 0;
    sampleQuestions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        calculatedScore++;
      }
    });
    setScore(calculatedScore);
    setShowResults(true);
  };

  return (
    <Box p={5} maxW="600px" mx="auto" bg="gray.50" borderRadius="md" boxShadow="md">
      <Heading as="h1" size="lg" textAlign="center" mb={5}>
        Online Test
      </Heading>

      <VStack spacing={5}>
        {sampleQuestions.map((question) => (
          <Box key={question.id} p={4} borderWidth="1px" borderRadius="md" bg="white" w="100%">
            <Text fontWeight="bold" mb={3}>
              {question.id}. {question.questionText}
            </Text>
            <RadioGroup
              value={selectedAnswers[question.id] || ""}
              onChange={(value) => handleAnswerChange(question.id, value)}
            >
              <Stack direction="column">
                {question.options.map((option) => (
                  <Radio key={option} value={option}>
                    {option}
                  </Radio>
                ))}
              </Stack>
            </RadioGroup>
          </Box>
        ))}
      </VStack>

      {!showResults && (
        <Button
          mt={5}
          colorScheme="teal"
          size="lg"
          w="100%"
          onClick={handleSubmit}
          isDisabled={Object.keys(selectedAnswers).length !== sampleQuestions.length}
        >
          Submit Test
        </Button>
      )}

      {showResults && (
        <Alert status="success" mt={5} borderRadius="md">
          <AlertIcon />
          You scored {score} out of {sampleQuestions.length}!
        </Alert>
      )}
    </Box>
  );
};

export default TestPage;
