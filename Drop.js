class Drop{
    constructor(x, y, radius) {
        var options = {
            'friction':0.1,
        }
        this.body = Bodies.circle(x, y, this.radius,options);
        this.radius = radius
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;

        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
}
}