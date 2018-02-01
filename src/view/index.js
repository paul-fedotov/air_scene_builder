import "pixi.js";

export default class View {
    constructor(app, res){
        this.app = app;
        this.res = res;
    }

    setCanvas(){
        let {clientHeight, clientWidth} = document.documentElement;
        this.game = new PIXI.Application(1536, 864, {backgroundColor : 0x1099bb});
        this.app.appendChild(this.game.view);
        this.res.forEach((res, i) => {
            let sp = new PIXI.Sprite.fromImage(res);
            sp.position = {x: i * 10, y: i * 10};
            this.game.stage.addChild(sp);
        });
    }

    setModel(model){
        this.model = model;
    }
}