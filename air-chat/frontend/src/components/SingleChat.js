import React from "react";
import { ChatState } from "../Context/ChatProvider";
import { Box, Text } from "@chakra-ui/react";

const SingleChat = ({ fetchAgain, setFetchAgain }) => {
  const { user, selectedChat, setSelectedChat } = ChatState();
  return (
    <>
      {selectedChat ? (
        <></>
      ) : (
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          h={"100%"}
        >
          <Text
            fontSize={"xxx-large"}
            paddingBottom={3}
            fontFamily={"Work sans"}
          >
            Click on a user to Start Chatting
          </Text>
        </Box>
      )}
    </>
  );
};

export default SingleChat;
