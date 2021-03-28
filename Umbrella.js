class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.image = loadImage("girl.png");
        this.umbrella = Bodies.circle(x,y,70,options);
        this.radius = 70;
        World.add(world, this.umbrella)
    }

    display(){
        var pos = this.umbrella.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y+70,300,300);
    }
}
