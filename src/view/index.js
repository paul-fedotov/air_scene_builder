import "pixi.js";
import Element from "./element";

const scene = {
    x: 500,
    y: 200,
    height: 1110,
    width: 750
};

export default class View {
    constructor(element, res){
        this.element = element;
        this.res = res;
        this.fn = {
            addElement: this.addElement.bind(this),
            stopPropagation: this.stopPropagationAllElements.bind(this)
        };
        //TODO: Stack of elements on screen
    }

    stopPropagationAllElements(){
        alert("work");
    }

    addElement(res){
        console.log(res);
        //TODO: Add element at center screen
    }

    removeElement(element){
        //TODO: Remove element from scree
    }

    exportJSON(){
        //TODO: Export JSON with scene
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
        this.scene.scale = {x: 0.5, y: 0.5};
        let bg = new PIXI.Graphics();
        bg.beginFill(0x000000, 1);
        bg.drawRect(
            scene.x,
            scene.y,
            scene.width,
            scene.height
        );
        bg.scale = {x: 0.5, y: 0.5};
        this.app.stage.addChild(bg);
        this.app.stage.addChild(this.scene);
    }

    setModel(model){
        this.model = model;
    }
}