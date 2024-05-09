import React from "react";
import {
  Container,
  Box,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Image,
} from "@chakra-ui/react";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import iconGif from "../iconV5.png";
import { useEffect } from "react";
import { useHistory } from "react-router";

const HomePage = () => {
  const history = useHistory();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);
  return (
    <>
      <Container maxW="xl" centerContent paddingTop={"20vh"}>
        <Box boxSize="s">
          <Image src={iconGif} alt="AirChat Logo" />
        </Box>
        <Box>
          <Text
            fontSize="xxx-large"
            fontFamily="Work sans"
            fontWeight={"bold"}
            color="black"
            textAlign="center"
          >
            Welcome to AirChat
          </Text>
        </Box>
      </Container>
      <Container maxW="xl" centerContent paddingTop={"5vh"}>
        <Box
          d="flex"
          justifyContent="center"
          p={3}
          bg={"white"}
          w="100%"
          m="40px 0 15px 0"
          borderRadius="lg"
          borderWidth="1px"
        >
          <Text
            fontSize="4xl"
            fontFamily="Work sans"
            color="black"
            textAlign="center"
          >
            AirChat
          </Text>
        </Box>
        <Box p={3} bg="white" w="100%" borderRadius="lg" borderWidth="1px">
          <Tabs variant="soft-rounded">
            <TabList mb={"1em"}>
              <Tab w={"50%"}>Login</Tab>
              <Tab w={"50%"}>Sign Up</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Login />
              </TabPanel>
              <TabPanel>
                <Signup />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </>
  );
};

export default HomePage;
