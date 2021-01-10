var hr, mn, sc;


function setup() {
  createCanvas(800,800);
  angleMode(DEGREES)
  
}

function draw() {
  background(187,109,57);  
 hr = hour()  
 mn = minute()
 sc = second()

 scAngle = map(sc, 0, 60, 0, 360)
 mnAngle = map(mn, 0, 60, 0, 360)
 hrAngle = map(hr, 0, 12, 0, 360)
 translate(400, 400)
 push()
 
 rotate(scAngle)
 
 stroke(rgb(26, 149, 210))
 strokeWeight(7)
 line(0, 0, 150, 0)
 pop()
 
 push()
 
 rotate(mnAngle)
 
 stroke(rgb(26, 149, 210))
 strokeWeight(7)
 line(0, 0, 200, 0)
 pop()
 
 push()
 
 rotate(hrAngle)
 
 stroke(rgb(26, 149, 210))
 strokeWeight(7)
 line(0, 0, 250, 0)
 pop()

 noFill()
 
 stroke(rgb(255, 255, 0))
 strokeWeight(7)
 arc(0, 0, 300, 300, 0, scAngle )
 
 stroke(rgb( 255, 0, 0))
 strokeWeight(7)
 arc(0, 0, 410, 410, 0, mnAngle )
 
 stroke(rgb(0,255, 0))
 strokeWeight(7)
 arc(0, 0, 500, 500, 0, hrAngle )
 
  drawSprites();
}