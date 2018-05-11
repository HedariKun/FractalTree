class branch {
    constructor(p1, p2, angle = 0){
        this.p1 = p1;
        this.p2 = p2;
        this.angle = angle;
    }

    show(ctx){
        ctx.strokeStyle ="#FF0000";
        ctx.beginPath();
        ctx.moveTo(this.p1.x, this.p1.y);
        ctx.lineTo(this.p2.x, this.p2.y);
        ctx.stroke();
    }
}