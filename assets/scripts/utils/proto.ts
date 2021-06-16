import ws from "./ws.js";

class Proto {
  msgType: any;
  constructor() {
    this.msgType = ws.stage.Body;
  }

  encode(cmd: string, msg: any) {
    let data = { [cmd]: msg };
    return this.msgType.encode(data).finish();
  }

  decode(buff: any) {
    try {
      let data = this.msgType.decode(buff);
      return {
        cmd: data.cmd,
        msg: data[data.cmd],
      };
    } catch (e) {
      return null;
    }
  }
}

export default new Proto();
