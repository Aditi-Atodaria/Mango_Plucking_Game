class Stone{
    constructor(x,y){
       var options={
            isStatic:false,
            restitution:0.8,
            friction:1.0,
            density:1.0
       }
       
        //use Bodies.circle to create the stone
        this.body = Bodies.circle(x,y,30, options);
        this.image = loadImage("stone.png");
       // this.color = color;
        World.add(world, this.body);

    }

    display(){
        //use push pop translate rotate image
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        //fill(this.color);
        //ellipseMode(RADIUS);
        //ellipse(0,0,30,30);
        imageMode(CENTER);
        image(this.image,0,0,50,50);
        pop();
        
    }
}