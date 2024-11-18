class Car {
    // The Constructor is defined with arguments.
    constructor( tempC,  tempXpos,  tempYpos,  tempXspeed, xDegree) {
      this.c = tempC;
      this.xpos = tempXpos;
      this.ypos = tempYpos;
      this.xspeed = tempXspeed;
      this.xDegree = xDegree;
    }
  
    display() {
       push();
       stroke(0);
       fill(this.c);   
      translate(this.xpos,this.ypos);
      rotate(radians(this.xDegree));
      rectMode(CENTER);
      rect(0,0,20,10);
       pop();
    }
  
    drive() {
      this.xpos = this.xpos + this.xspeed;
      if (this.xpos > width) {
        this.xpos = 0;
      }
    }  
    flip() {
      this.xDegree++;
    }
  }