// LICENSE
/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

// METADATA
const generationMetadata = {
    "name":"",
    "description":""
}

// SEEDS FOR OUTPUT
const seeds = []

//create random circles inside other circles
//

var circles = [{x:0,y:0,r:DIM/2 - 50*M}]
var step = 0.03
  
function setup() {
  colorMode(HSB,100);
  createCanvas(WIDTH, HEIGHT);
  noFill();
  var pp = circles[0]
  
  while(pp.r > 20){
  // for (let c = 1; c < 3; c++) {
    dx = random(-pp.r*.3, pp.r*.3)
    dy = random(-pp.r*.3, pp.r*.3)
    dr = random(.5, .6)
    pp = {x:pp.x+dx, y:pp.y+dy, r: pp.r*dr}
    circles.push(pp)
  }
  // noLoop();
}
var nn = 0

function draw() {
  clear();
  background(10,3,98);
  translate(width/2, height/2);
  stroke(0,10,70)
  ellipse(circles[0].x, circles[0].y, circles[0].r*2)    
  for (let c = 1; c < circles.length; c++){
    pp = circles[c-1]
    // update circle position within the previous circle
    // jx = randomGaussian(0,step)
    // jy = randomGaussian(0,step)
    jx = map(noise(circles[c].x*step, circles[c].y*step, nn*step),0,1,-1,1)
    jy = map(noise(circles[c].y*step, circles[c].x*step, nn*step),0,1,-1,1)
    dist = (circles[c].x + jx - pp.x)**2 + (circles[c].y + jy - pp.y)**2
    if(pp.r > (sqrt(dist)+circles[c].r)){      
      // move all subsequent circles
      for (let d = c; d < circles.length; d++){
        circles[d].x += jx
        circles[d].y += jy        
      }
    }
    cc = circles[c]
    nn ++
    
    stroke(map(cc.x,0,DIM,50,100),30,80);
    for (let a = 0; a < TWO_PI; a += 0.1){

      x2 = cos(a)*cc.r + cc.x
      y2 = sin(a)*cc.r + cc.y
      // find angle from pp
      s = (y2-pp.y)/(x2-pp.x)
      aa = atan(s)
      if(x2 < pp.x) aa += PI
      // find point on pp
      x3 = pp.x + cos(aa)*pp.r
      y3 = pp.y + sin(aa)*pp.r

      if (((x2-x3)**2 + (y2-y3)**2) < (pp.r*.3)**2){
        line(x2,y2,x3,y3)      
      }
      
    }
    
    stroke(0,10,70)
    ellipse(cc.x, cc.y, cc.r*2)    

  }

}