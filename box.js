class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.6,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    
    push()
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill(random(0,255));
    strokeWeight(3);
    rect(0, 0, this.width, this.height);
    pop();
  }
};
