import socket from "../utils/socket";

export default function (game: any) {
  socket.on("pong", (msg: any) => {
    console.log("get pong", msg);
  });
}
