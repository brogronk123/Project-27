class bob {
    constructor(x,y,r){
        var options = {
            isStatic:false,
            restitution:1.2,
            friction:0.4,
            density:3
        }
        this.x=x;
        this.y=y;
        this.r=r;
        //this.paper = loadImage("paper.png");
        this.body = Bodies.circle(this.x,this.y,this.r/2,options);
        World.add(world,this.body);

        

    }
    display(){
        var paperposition = this.body.position;

        push();
        translate(paperposition.x,paperposition.y);
        rectMode(CENTER);
        strokeWeight(3);
        ellipse(0,0,this.r,this.r);
        //image(this.paper, -40,-40, this.r, this.r);
        pop();
    }
}