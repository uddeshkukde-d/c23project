class Box {


constructor(x, y, height,width) {
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, 20,50, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
      }
      display(){
        fill("red");
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
      }
}