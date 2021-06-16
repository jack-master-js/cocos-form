import proto from "./proto";

class Socket {
  private _socket!: WebSocket;
  private _handlers = new Map();

  connect(url: string) {
    return new Promise((resolve, reject) => {
      this._socket = new WebSocket(url);

      this._socket.onmessage = async (msg: any) => {
        let arrBuf = await msg.data.arrayBuffer();
        let buf = new Uint8Array(arrBuf);
        let data = proto.decode(buf);

        console.log(data);
        this.trigger(data?.cmd, data?.msg);
      };

      this._socket.onopen = () => {
        resolve(true);
      };

      this._socket.onclose = () => {
        //TODO reconnect
        console.log("onclose");
        reject(false);
      };

      this._socket.onerror = (e) => {
        //TODO reconnect
        reject(e);
      };
    });
  }

  on(cmd: string, callback: any) {
    this._handlers.set(cmd, callback);
  }

  emit(cmd: string, msg: any) {
    this._socket.send(proto.encode(cmd, msg));
  }

  trigger(cmd: string, msg: any) {
    let handle = this._handlers.get(cmd);
    if (handle) {
      msg = msg || {};
      handle(msg);
    }
  }
}

export default new Socket();
