class Box{
// this is the design or bluprint of a box that we create

// box is going to be rectangle or square
    constructor(x,y,width,height){
        // create a rectanglular body
        var options = {
            restitution:1
        }

        this.body = Bodies.rectangle(x,y,width,height, options);
        this.w = width;
        this.h = height;
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle=this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        rect(0,0,this.w,this.h);
        pop()
    }
}