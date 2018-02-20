import "pixi.js";

export default class Element {
    constructor(res, i, fn){
        let sp = new PIXI.Sprite.fromImage(res);
        sp.interactive = true;
        sp.buttonMode = true;
        sp.texture.baseTexture.on('loaded', () =>{
            let {width, height} = sp;
            let k = width / 100;
            sp.position = {x: 1400, y: i * 100 + 10};
            sp.width = width / k;
            sp.height = height / k;
        });
        this.index = i;
        this.res = res;
        this.sprite = sp;
        this.fn = fn;

        this.onClick = this.onClick.bind(this);

        this.addEvents();
    }

    addEvents(){
        this.sprite.on("pointerdown", this.onClick);
    }

    removeEvents(){
        this.sprite.off("pointerdowm", this.onClick);
    }

    onClick(e){
        this.fn.addElement(this.res);
    }

}