import { _decorator, Component } from "cc";
import {
  UIConfig,
  UIPackage,
  GRoot,
  GComponent,
  GComboBox,
  Event,
} from "fairygui-cc";

const { ccclass, property } = _decorator;
const { STATUS_CHANGED } = Event;

@ccclass("Room")
export class Room extends Component {
  private formItems!: GComponent;
  private gselect!: GComboBox;

  onLoad() {
    localStorage.setItem("scene", "room");
    UIConfig.verticalScrollBar = "ui://FormItem/ScrollBar_VT";
    UIConfig.horizontalScrollBar = "ui://FormItem/ScrollBar_HZ";
    UIConfig.buttonSound = "ui://FormItem/click";

    GRoot.create();
    UIPackage.loadPackage("UI/FormItem", () => {
      this.formItems = UIPackage.createObject("FormItem", "Main").asCom;
      this.formItems.x = 50;
      this.formItems.y = 100;

      this.gselect = this.formItems.getChild("n1");

      this.gselect.items = ["全部", "a", "b", "c"];
      this.gselect.values = ["", "1", "2", "3"];
      this.gselect.value = "";

      this.gselect.on(STATUS_CHANGED, (target: GComboBox) => {
        console.log(target.value);
      });

      GRoot.inst.addChild(this.formItems);
    });
  }
}
