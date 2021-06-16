import { _decorator, Component, EditBox, Button } from "cc";
import * as api from "../net/api";

const { ccclass, property } = _decorator;

@ccclass("Lobby")
export class Lobby extends Component {
  @property(EditBox)
  nameInput!: EditBox;

  @property(Button)
  submitBtn!: Button;

  onLoad() {
    localStorage.setItem("scene", "lobby");
    this.nameInput.node.on(
      "editing-did-ended",
      (editbox: EditBox) => {
        console.log(editbox.string);
      },
      this
    );

    this.submitBtn.node.on("click", async (target: Button) => {
      const res = await api.fetchData({ name: this.nameInput.string });
      console.log(res);
    });
  }
}
