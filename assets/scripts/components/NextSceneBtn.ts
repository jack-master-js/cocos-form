import {
  _decorator,
  director,
  Component,
  Node,
  AudioClip,
  AudioSource,
} from "cc";

const { ccclass, property } = _decorator;

@ccclass("NextSceneBtn")
export class NextSceneBtn extends Component {
  @property(AudioClip)
  public clip: AudioClip = null!;

  @property(AudioSource)
  public audioSource: AudioSource = null!;

  start() {
    this.node.on("click", async (target: Node) => {
      this.audioSource.playOneShot(this.clip, 1);
      const scene = localStorage.getItem("scene");
      console.log(scene);
      switch (scene) {
        case "main":
          director.loadScene("lobby");
          break;

        case "lobby":
          director.loadScene("room");
          break;

        case "room":
          director.loadScene("main");
          break;
      }
    });
  }
}
