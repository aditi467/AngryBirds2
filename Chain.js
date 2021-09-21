class Chain {
    constructor(B1,B2){
        var options = {
            bodyA : B1,
            bodyB : B2,
            length : 20,
            stiffness : 0.05
        }
        this.chain = Matter.Constraint.create(options)
        World.add(world,this.chain)
         }
display(){
    var pointA = this.chain.bodyA.position
    var pointB = this.chain.bodyB.position
    strokeWeight (4)
    line(pointA.x,pointA.y,pointB.x,pointB.y)
    
}
}