import { _decorator, director, Component, Node } from "cc";

const { ccclass, property } = _decorator;

@ccclass("PreSceneBtn")
export class PreSceneBtn extends Component {
  start() {
    this.node.on("click", async (target: Node) => {
      const scene = localStorage.getItem("scene");
      console.log(scene);
      switch (scene) {
        case "main":
          director.loadScene("room");
          break;

        case "lobby":
          director.loadScene("main");
          break;

        case "room":
          director.loadScene("lobby");
          break;
      }
    });
  }
}
