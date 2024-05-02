import React from "react";
import ScrollableFeed from "react-scrollable-feed";
import { isLastMessage, isSamesender } from "../config/ChatLogics";
import { Tooltip, Avatar } from "@chakra-ui/react";

const ScrollableChat = ({ messages }) => {
  return (
    <ScrollableFeed>
      {messages &&
        messages.map((m, i) => (
          <div style={{ display: "flex" }} key={m._id}>
            {isSamesender(messages, m, i, user._id) ||
              (isLastMessage(messages, m, i, user._id) && (
                <Tooltip
                  label={m.sender.name}
                  placement="bottom-start"
                  hasArrow
                >
                  <Avatar
                    mt={"7px"}
                    mr={1}
                    size={"sm"}
                    cursor={"pointer"}
                    name={m.sender.name}
                    src={m.sender.pic}
                  />
                </Tooltip>
              ))}
          </div>
        ))}
    </ScrollableFeed>
  );
};

export default ScrollableChat;
