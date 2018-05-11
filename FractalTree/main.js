const width = 1200, height = 600;
const branchHeight = 175;

let ctx, canvas;
let mainBranch;
let angle = 0;
let generationsNumber = 6;
let generations = [];

window.onload = () => {
    canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    ctx = canvas.getContext("2d");
    document.body.appendChild(canvas);
    mainBranch = new branch(new vector(width/2, height), new vector(width/2, height-branchHeight));
    update();
}

function update(){
    ctx.clearRect(0, 0, width, height);
        //angle = document.getElementById("myRange").value;
    angle += 0.5;
    generations = [];
    
    for(let i = 0; i < generationsNumber; i++){
        let g = [];
        if (i == 0){
            let b1 = getBranch(mainBranch.p2, branchHeight, 90 + angle);
            let b2 = getBranch(mainBranch.p2, branchHeight, 90 - angle) ;
            g.push(b1, b2);
        } else {
            for(let j = 0; j < generations[i-1].length; j++){
                let a = generations[i-1][j].angle;
                let b1 = getBranch(generations[i-1][j].p2, branchHeight/(i*1.8), a - angle);
                let b2 = getBranch(generations[i-1][j].p2, branchHeight/(i*1.8), a + angle);
                g.push(b1, b2);
            }
        }
        generations.push(g);
    }

    for(g of generations){
        for(b of g){
            b.show(ctx);
        }
    }

    mainBranch.show(ctx);
    requestAnimationFrame(update);
}

function getBranch(parent, length, a){
    let x = (Math.cos((a * Math.PI) / 180) * length);
    let y = (-Math.sin((a * Math.PI) / 180) * length);
    y += parent.y;
    x += parent.x;
    return new branch(parent, new vector(x, y), a);
} 