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

        // this.onTouchStart = this.onTouchStart.bind(this);
        // this.onTouchMove = this.onTouchMove.bind(this);
        // this.onTouchEnd = this.onTouchEnd.bind(this);
        // this.onTouchEndOutside = this.onTouchEndOutside.bind(this);

        this.addEvents();
    }

    addEvents(){
        this.sprite.on("touchstart", this.onTouchStart);
        this.sprite.on("touchmove", this.onTouchMove);
        this.sprite.on("touchend", this.onTouchEnd);
    }

    removeEvents(){

    }

    onTouchStart(e){
        this.data = e.data;
        this.dragging = true;
        console.log('aaa');
        // this.fn.stopPropagation();
    }

    onTouchMove(e){
        console.log('aaa');
    }

    onTouchEnd(e){
        console.log('aaa');
    }

    onTouchEndOutside(e){

    }
}