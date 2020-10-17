class Roof {
    constructor(){
        var options = {
            isStatic:true,
        }
        this.body = Bodies.rectangle(400,100,700,25,options);
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        strokeWeight(3);
        fill("yellow");
        rect(400,100,700,25);
    }
}