class Chain {
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            pointB : {x:this.offsetX, y:this.offsetY},
            //stiffness : 1
            //length : 0.04
        }
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        var bodyA = this.chain.bodyA.position;
        var bodyB = this.chain.bodyB.position;
        var pointB = this.chain.pointB
        stroke("white");
        strokeWeight(4);
        line(bodyA.x,bodyA.y,bodyB.x+pointB.x,bodyB.y+pointB.y);
    }
}