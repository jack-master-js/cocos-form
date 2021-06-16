import { _decorator, Component } from "cc";
import { UIPackage, GRoot, GComponent, GProgressBar } from "fairygui-cc";
import socket from "./utils/socket";
import onSocketEvents from "./net/onSocketEvents";

const { ccclass, property } = _decorator;

@ccclass("Main")
export class Main extends Component {
  private _view!: GComponent;
  private _progress!: GProgressBar;
  private total = 88;
  private completed = 0;

  async onLoad() {
    localStorage.setItem("scene", "main");
    // await socket.connect("ws://localhost:3000?token=test");
    // onSocketEvents(this);
    // setInterval(() => {
    //   socket.emit("ping", { clientTime: Date.now() });
    // }, 1000);
    GRoot.create();
    UIPackage.loadPackage("UI/Common", () => {
      this._view = UIPackage.createObject("Common", "ProgressBar").asCom;
      this._view.x = 200;
      this._view.y = 400;

      this._progress = this._view.getChild("n0");
      GRoot.inst.addChild(this._view);
    });
  }

  update(deltaTime: number) {
    this.completed += deltaTime * 10;
    console.log(this.completed);

    if (this.completed > this.total) {
      this.completed = 0;
    }
    if (this._progress)
      this._progress.value = (this.completed / this.total) * 100;
  }
}
