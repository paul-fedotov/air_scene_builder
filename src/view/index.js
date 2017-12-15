import "pixi.js";

export default class View {
    constructor(app){
        this.app = app;
    }

    setCanvas(){
        let {clientHeight, clientWidth} = document.documentElement;
        this.game = new PIXI.Application(clientWidth, clientHeight, {backgroundColor : 0x1099bb});
        this.app.appendChild(this.game.view);
    }

    setModel(model){
        this.model = model;
    }
}