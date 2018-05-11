class vector{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    scale(value){
        this.x *= value;
        this.y *= value;
    }

    static distance(p1, p2){
        return Math.abs(Math.sqrt((p1.x - p2.x) + (p1.y - p2.y)));
    }
}