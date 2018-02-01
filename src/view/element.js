import "pixi.js";

export default class Element {
    constructor(res, i){
        let sp = new PIXI.Sprite.fromImage(res);
        sp.texture.baseTexture.on('loaded', () =>{
            let {width, height} = sp;
            let k = width / 100;
            sp.position = {x: 1780, y: i * 100 + 10};
            sp.width = width / k;
            sp.height = height / k;
            sp.interactive = true;
        });
        this.sprite = sp;
    }
}