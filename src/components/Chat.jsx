import React, { useContext } from "react";
import Camera from "../img/camera.svg";
import AddFriend from "../img/user.png";
import More from "../img/more.svg";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <div className="icon" data-tooltip="Open Camera">
            <img src={Camera} />
          </div>
          <div className="icon" data-tooltip="Add Friend">
            <img width={24} src={AddFriend} />
          </div>
          <div className="icon" data-tooltip="More">
            <img src={More} />
          </div>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
