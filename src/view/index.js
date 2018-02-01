import "pixi.js";
import Element from "./element";

const scene = {
    x: 0,
    y: 0,
    height: 667,
    width: 375
};

export default class View {
    constructor(element, res){
        this.element = element;
        this.res = res;
        this.fn = {
            stopPropagation: this.stopPropagationAllElements.bind(this)
        }
    }

    stopPropagationAllElements(){
        alert("work");
    }

    setCanvas(){
        let {clientHeight, clientWidth} = document.documentElement;
        this.app = new PIXI.Application(1536, 864, {backgroundColor : 0x1099bb});
        this.element.appendChild(this.app.view);
        this.res.forEach((res, i) => {
            let e = new Element(res, i, this.fn);
            this.app.stage.addChild(e.sprite);
        });
        this.app.stage.interactiveChildren = true;
        this.app.stage.interactive = true;
        this.scene = new PIXI.Container();
        this.scene.position = {x: scene.x, y: scene.y};
        this.scene.width = scene.width;
        this.scene.height = scene.height;
        let bg = new PIXI.Graphics();
        bg.beginFill(0x000000, 1);
        bg.drawRect(scene.x, scene.y, scene.width, scene.height);
        this.app.stage.addChild(bg);
        this.app.stage.addChild(this.scene);

    }

    setModel(model){
        this.model = model;
    }
}