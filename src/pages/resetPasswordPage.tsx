import { useState } from "react";
import {
  Box,
  Button,
  Input,
  Text,
  VStack,
  Heading
} from "@chakra-ui/react";
import axios from "axios";

const ResetPasswordPage = () => {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  const handleReset = async () => {
    setError("");
    setMsg("");

    if (password !== confirm) {
      setError("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post(`https://admee.in:3003/api/cc/users/reset-password`, {
        mobile,
        password
      });

      setMsg(res.data.message);
    } catch (err: any) {
      setError(err.response?.data?.error || "Something went wrong");
    }
  };

  return (
    <Box bg="#f9fcff" minH="100vh" display="flex" alignItems="center" justifyContent="center">
      <Box bg="white" p={10} borderRadius="2xl" boxShadow="lg" w="400px">
        <VStack spacing={5}>
          <Heading size="md" color="pink.600">Reset Password</Heading>

          <Input
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />

          <Input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Input
            type="password"
            placeholder="Confirm Password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />

          {error && <Text color="red.500">{error}</Text>}
          {msg && <Text color="green.500">{msg}</Text>}

          <Button bg="pink.500" color="white" w="100%" onClick={handleReset}>
            Reset Password
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default ResetPasswordPage;
